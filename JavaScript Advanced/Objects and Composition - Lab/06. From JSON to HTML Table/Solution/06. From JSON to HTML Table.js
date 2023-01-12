function fromJSONtoHTMLTable(json) {
    let input = JSON.parse(json);
    console.log('<table>');

    let keys = Object.keys(input[0]);
    let result = '   <tr>';

    for (let el of keys) {
        result += `<th>${escape(el)}</th>`;
    }

    result += '</tr>'
    console.log(result);
    let values = Object.values(input);

    for (let studentInfo of values) {
        result = `   <tr>`;

        for (let el of Object.values(studentInfo)) {
            result += `<td>${escape(el)}</td>`;
        }

        result += '</tr>';
        console.log(result);
    }

    console.log('</table>');

    function escape(string) {

        return string.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
 
}
fromJSONtoHTMLTable(`[{"Name":"Pesho","Score":4,"Grade":"8"},
{"Name":"Gosho","Score":5,"Grade":"8"},
{"Name":"Angel","Score":5.5}]`)