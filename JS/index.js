function filter() {
    var a = document.getElementById('all');
    var b = document.getElementById('filter');
    var c = document.getElementById('filter_text');
    if (a.style.display === 'block') {
        a.style.display = 'none';
        b.style.display = 'block';
        c.style.display = "inline-block"
    }
    else {
        a.style.display = 'block';
        b.style.display = 'none';
    }
}

function back() {
    var a = document.getElementById('all');
    var b = document.getElementById('filter');
    var c = document.getElementById('filter_text');
    var d = document.getElementById('filter1')
    var e = document.getElementById('filter_text1');
    if (b.style.display === 'block') {
        a.style.display = 'block';
        b.style.display = 'none';
        c.style.display = "none"
    }
    else if (d.style.display === 'block') {
        d.style.display = 'none'
        a.style.display = 'block'
        c.style.display = 'none'
        e.style.display = 'none'
    }
    else {
        // something goes here
    }
}

function orientation() {
    var a = document.getElementById('all');
    var d = document.getElementById('filter1');
    var c = document.getElementById('filter_text1');
    if (a.style.display === 'block') {
        a.style.display = 'none';
        d.style.display = 'block';
        c.style.display = "inline-block"
    }
    else {
        a.style.display = 'block';
        d.style.display = 'none';
    }
}
