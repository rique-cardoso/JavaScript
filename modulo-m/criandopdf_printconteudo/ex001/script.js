const btn_imp = document.querySelector('#btn_imp')
btn_imp.addEventListener('click', e => {
    const conteudo = document.querySelector('#tabela').innerHTML
    let estilo = "<style>";
    estilo += "tabel {widht: 100%;font: 25px Calibri;}";
    estilo += "table, th, td {border: solid 2px #888; border-collapse: collapse;";
    estilo += "paddin: 4px 8px;text-align: center;}";
    estilo += "</style>";
    const win = window.open('', '', 'heigth=700,widht:700')
    win.document.write('<html><head>');
    win.document.write('<title>CFB Cursos</title>');
    win.document.write(estilo);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(conteudo);
    win.document.write('</body></html>');
    win.print()
})