$(function() {
    const testBtn = document.getElementById('test-button');

    const fontSize = document.getElementById('font-size');
    const btnLabel = document.getElementById('btn-label');

    const fontColor = document.getElementById('font-color');
    const bgColor = document.getElementById('bg-color');
    const borderColor = document.getElementById('border-color');

    const pTop = document.getElementById('top');
    const pRight = document.getElementById('right');
    const pBottom = document.getElementById('bottom');
    const pLeft = document.getElementById('left');

    const borderWidth = document.getElementById('border-width');
    const borderRadius = document.getElementById('border-radius');

    let [...inputs] = document.querySelectorAll('input');

    inputs.map(item => {
       item.setAttribute('autocomplete', 'off');
    });

    fontSize.oninput = (e) => {
        testBtn.style.fontSize = `${e.target.value}px`;
    };

    btnLabel.oninput = (e) => {
        testBtn.innerHTML = `${e.target.value}`;
    };

    fontColor.oninput = (e) => {
        testBtn.style.color = e.target.value;
    };

    bgColor.oninput = (e) => {
        testBtn.style.backgroundColor = e.target.value;
    };

    borderColor.oninput = (e) => {
        testBtn.style.borderColor = e.target.value;
    };

    pTop.oninput = (e) => {
        testBtn.style.paddingTop = `${e.target.value}px`;
    };

    pRight.oninput = (e) => {
        testBtn.style.paddingRight = `${e.target.value}px`;
    };

    pBottom.oninput = (e) => {
        testBtn.style.paddingBottom = `${e.target.value}px`;
    };

    pLeft.oninput = (e) => {
        testBtn.style.paddingLeft = `${e.target.value}px`;
    };

    borderWidth.oninput = (e) => {
        testBtn.style.borderWidth = `${e.target.value}px`;
    };

    borderRadius.oninput = (e) => {
        testBtn.style.borderRadius = `${e.target.value}px`;
    };

    const generateBtn = document.getElementById('generate');

    const closeBtn = document.getElementById('close');

    const htmlText = document.getElementById('htmlText');
    const cssText = document.getElementById('cssText');

    generateBtn.onclick = () => {

        cssText.innerText = `#${testBtn.id} { ${testBtn.style.cssText} }`;

        let btnAsString = testBtn.outerHTML;
        let styleAttr = btnAsString.slice(btnAsString.indexOf('style')-1, btnAsString.indexOf('>'));
        btnAsString = btnAsString.replace(styleAttr, "");
        htmlText.innerText = btnAsString;

        if (!testBtn.hasAttribute('style')) {
            alert('Add some styles to the test button please');
        } else {
            $('#result').fadeIn();
            $('#overlay').fadeIn();
        }

    };

    document.body.onkeyup = (e) => {
        if (e.key === "Escape") {
            $('#result').fadeOut();
            $('#overlay').fadeOut();
        }
    };

    closeBtn.onclick = () => {
        $('#result').fadeOut();
        $('#overlay').fadeOut();
    };

    overlay.onclick = () => {
        $('#result').fadeOut();
        $('#overlay').fadeOut();
    };

    window.addEventListener('pageshow', PageShowHandler, false);
    window.addEventListener('unload', UnloadHandler, false);

    function PageShowHandler() {
        window.addEventListener('unload', UnloadHandler, false);
    }

    function UnloadHandler() {
        window.removeEventListener('unload', UnloadHandler, false);
    }

});
