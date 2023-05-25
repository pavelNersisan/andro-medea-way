
async function createDownloadButton(article) {
  const doi = article.doi;
  if (!doi) {
    return;
  }

  try {
    const response = await axios.get(`https://sci-hub.do/${doi}`, {
      responseType: 'text',
    });

    const $ = cheerio.load(response.data);
    const pdfUrl = $('.pdf-link').attr('href');

    if (pdfUrl) {
      const downloadButton = document.createElement('a');
      downloadButton.href = pdfUrl;
      downloadButton.download = `${article.title}.pdf`;
      downloadButton.textContent = 'Download PDF';
      downloadButton.classList.add('download-button');
      article.element.appendChild(downloadButton);
    } else {
      const noDownloadMessage = document.createElement('p');
      noDownloadMessage.textContent = 'No download link available.';
      noDownloadMessage.classList.add('no-download-message');
      article.element.appendChild(noDownloadMessage);
    }

  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
