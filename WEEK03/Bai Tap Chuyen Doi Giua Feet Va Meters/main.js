function foot_to_meter() {
    let input_foot = parseInt(prompt("Nhập foot: "));
    document.getElementById("input_foot").innerHTML = input_foot;
    let meter = 0.305 * input_foot;
    document.getElementById("foot_to_meter").innerHTML = meter;
    return meter;
}

function meter_to_foot() {
    let input_meter = parseInt(prompt("Nhập meter: "));
    document.getElementById("input_meter").innerHTML = input_meter;
    let foot = 3.279 * input_meter;
    document.getElementById("meter_to_foot").innerHTML = foot;
    return foot;
}




