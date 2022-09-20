function translate() {
    let eng_dict = [
        'lion',
        'bear',
        'elephant',
        'rhino',
        'hippo',
        'panda',
        'tiger',
        'wolf',
    ];

    let viet_dict = [
        'sư tử',
        'gấu',
        'voi',
        'tê giác',
        'hà mã',
        'gấu trúc',
        'hổ',
        'sói',
    ];

    let input = document.getElementById("input").value;

    // let index = eng_dict.indexOf(input);
    let index = 0;

    for (let animals of eng_dict) {

        if (animals === input) {
            index = eng_dict.indexOf(animals);

        }
    }

    let output = viet_dict[index];

    document.getElementById("output").innerHTML = output;

    return output;

}