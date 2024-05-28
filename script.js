document.addEventListener('DOMContentLoaded', () => {
  const htmlCode = document.getElementById('html-code');
  const cssCode = document.getElementById('css-code');
  const jsCode = document.getElementById('js-code');
  const output = document.getElementById('output');

  function updateOutput() {
      const html = htmlCode.value;
      const css = `<style>${cssCode.value}</style>`;
      const js = `<script>${jsCode.value}<\/script>`;
      const preview = `${html}${css}${js}`;
      
      output.contentDocument.open();
      output.contentDocument.write(preview);
      output.contentDocument.close();
  }

  [htmlCode, cssCode, jsCode].forEach((element) => {
      element.addEventListener('input', updateOutput);
  });

  updateOutput();
});
