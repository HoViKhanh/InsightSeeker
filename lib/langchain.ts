import { ConversationalRetrievalQAChain } from "langchain/chains";
import { getVectorStore } from "./vector-store";
import { getPinecone } from "./pinecone-client";

import {
    StreamingTextResponse,
    experimental_StreamData,
    LangChainStream,
} from "ai";
import { nonStreamingModel, streamingModel } from "./llm";
import {STANDALONE_QUESTION_TEMPLATE, QA_TEMPLATE} from "./prompt-templates";

type callChainArgs = {
    question: string,
    chatHistory: string
}

export async function callChain({question, chatHistory}: callChainArgs) {
    try{
        const sanitizedQuestion = question.trim().replaceAll("\n", " ");
        const pineConeClient = await getPinecone();
        const vectorStore = await getVectorStore(pineConeClient);

        const { stream, handlers} = LangChainStream({
            experimental_streamData: true,
        })

        const data = new experimental_StreamData();

        const chain = ConversationalRetrievalQAChain.fromLLM(
            streamingModel,
            vectorStore.asRetriever(),
            {
                qaTemplate: QA_TEMPLATE,
                questionGeneratorTemplate: STANDALONE_QUESTION_TEMPLATE,
                returnSourceDocuments: true, //default 4
                questionGeneratorChainOptions: {
                    llm: nonStreamingModel,
                },
            }
        );
        
      chain.invoke({
        question: sanitizedQuestion,
        chat_history: chatHistory
      },
        {'callbacks': [handlers]}
      ).then(async (res) => {
        const sourceDocuments = res?.sourceDocuments;
        const firstTwoDocuments = sourceDocuments.slice(0, 2);
        const pageContents = firstTwoDocuments.map(
            ({pageContent} : {pageContent: string}) => pageContent
        );
        data.append({
            sources: pageContents,
        });
        data.close();
      })

      return new StreamingTextResponse(stream, {}, data)
    } catch (e) {
        console.error(e);
        throw new Error("Call chain method failed to execute!");
    }
}


