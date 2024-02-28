//text editor and output
const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const outputFrame = document.getElementById('output-frame');

function updateOutput() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}</script>`;
  
  const output = `
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${css}
    </head>
    <body>
      ${html}
      ${js}
    </body>
    </html>
  `;

  outputFrame.srcdoc = output;
}

htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
jsCode.addEventListener('input', updateOutput);

updateOutput(); // Initial update
//copy button
document.addEventListener("DOMContentLoaded", function() {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
  
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const editor = button.closest('.editor');
        const textarea = editor.querySelector('.code');
        textarea.select();
        document.execCommand('copy');
      });
    });
});
//download button
document.addEventListener("DOMContentLoaded", function() {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
  
    const downloadButton = document.getElementById('download-btn');
    downloadButton.addEventListener('click', function() {
      downloadFile('index.html', htmlCode.value, 'text/html');
      downloadFile('styles.css', cssCode.value, 'text/css');
      downloadFile('script.js', jsCode.value, 'text/javascript');
    });
  
    function downloadFile(filename, content, contentType) {
      const element = document.createElement('a');
      const file = new Blob([content], {type: contentType});
      element.href = URL.createObjectURL(file);
      element.download = filename;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
});