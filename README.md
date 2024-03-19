# Insight Seeker

## Overview

Insight Seeker is an innovative semantic search application leveraging Web crawling and Natural Language Processing (NLP) to enhance the searching experience and provide users with a unique way to explore content on the internet. This application offers multiple search modalities including text, images, and soon audio, aiming to deliver concise and accurate results while minimizing distracting content.

## Project Flow

<img src="https://github.com/F1xedbot/InsightSeeker/blob/main/InsightSeeker_Diagram.png?raw=true" alt="Insight Seeker Flow" width="800">

- **User Input Enhancement:** The user input is facilitated by a completion system powered by GPT 3.5 Turbo API. This system assists in obtaining the intended search phrase from the user, particularly effective with images or audio inputs.

- **Web Crawling and Search:** The search phrase is then queried against various search engines such as Google or Bing, and the resulting URLs are crawled to extract content.

- **Content Vectorization:** The retrieved content is vectorized using an LLM (Large Language Model) machine learning model, and the resultant vectors are stored in a vector-based database.

- **Cosine Similarity Analysis:** Utilizing the vectorized user input and content, the application performs cosine similarity analysis to identify the most relevant content.

- **AI-based Content Interpretation:** The identified relevant content serves as context for the AI model to generate specific answers to user queries about the content.

## Contributing

Contributions are welcome! If you'd like to contribute to Insight Seeker, please follow these guidelines:

- Fork the repository.
  
- Create a new branch: `git checkout -b feature/new-feature`.
  
- Make your changes and commit them: `git commit -m 'Add new feature'`.
  
- Push to the branch: `git push origin feature/new-feature`.
  
- Submit a pull request.

## License

This project is licensed under the MIT License.
