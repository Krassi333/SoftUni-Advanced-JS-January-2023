function attachEventsListeners() {

    document.getElementById('convert').addEventListener('click', convert);

    function convert() {
        let value = Number(document.getElementById('inputDistance').value);
        let convertFrom = document.getElementById('inputUnits').value;
        let convertTo = document.getElementById('outputUnits').value
       // console.log(convertTo);
        //console.log('t');

        let valueInMeters = 0;

        switch (convertFrom) {
            case 'km':
                valueInMeters = value * 1000;
                break;
            case 'm':
                valueInMeters = value;
                break;
            case 'cm':
                valueInMeters = value / 100;
                break;
            case 'mm':
                valueInMeters = value / 1000;
                break;
            case 'mi':
                valueInMeters = value * 1609.34;
                break;
            case 'yrd':
                valueInMeters = value * 0.9144;
                break;
            case 'ft':
                valueInMeters = value * 0.3048;
                break;
            case 'in':
                valueInMeters = value * 0.0254;
                break;
        }

        let res = 0;

        switch (convertTo) {
            case 'km':
                res = valueInMeters / 1000;
                break;
            case 'm':
                res = valueInMeters;
                break;
            case 'cm':
                res = valueInMeters * 100;
                break;
            case 'mm':
                res = valueInMeters * 1000;
                break;
            case 'mi':
                res = valueInMeters / 1609.34;
                break;
            case 'yrd':
                res = valueInMeters / 0.9144;
                break;
            case 'ft':
                res = valueInMeters / 0.3048;
                break;
            case 'in':
                res = valueInMeters / 0.0254;
                break;
        }

        document.getElementById('outputDistance').value=res;
    }
}