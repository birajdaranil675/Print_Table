function convertToRupee()
{
    let dValue = parseInt(document.getElementById('dValue').value);
    let result = (dValue*74.5);
    document.getElementById('rValue').innerHTML =  '<h3>Value in rupees:'+result+ '₹ </h3>';
}