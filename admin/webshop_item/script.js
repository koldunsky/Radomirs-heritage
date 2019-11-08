var version_0_tab;
var version_1_tab;
var version_0;
var version_1;
var version_add;

var version_0_name;
var version_0_itemId;
var version_0_itemAmount;
var version_0_price;
var version_0_discount;
var version_0_timed;
var version_0_timedFrom;
var version_0_timedTo;
var version_0_visible;
var version_0_giftable;

var version_1_name;
var version_1_itemId;
var version_1_itemAmount;
var version_1_price;
var version_1_discount;
var version_1_timed;
var version_1_timedFrom;
var version_1_timedTo;
var version_1_visible;
var version_1_giftable;

function onLoad() {
    version_0_tab = document.getElementById("version_0_tab");
    version_1_tab = document.getElementById("version_1_tab");
    version_0 = document.getElementById("version_0");
    version_1 = document.getElementById("version_1");
    version_add = document.getElementById("version_add");

    version_0_name = document.getElementById("version_0_name").value;
    version_0_itemId = document.getElementById("version_0_itemId").value;
    version_0_itemAmount = document.getElementById("version_0_itemAmount").value;
    version_0_price = document.getElementById("version_0_price").value;
    version_0_discount = document.getElementById("version_0_discount").value;
    version_0_timed = document.getElementById("version_0_timed").checked;
    version_0_timedFrom = document.getElementById("version_0_timedFrom").value;
    version_0_timedTo = document.getElementById("version_0_timedTo").value;
    version_0_visible = document.getElementById("version_0_visible").checked;
    version_0_giftable = document.getElementById("version_0_giftable").checked;
}

function addVersion() {
    version_1.classList.toggle("hidden");
    version_0.classList.toggle("hidden");
    version_1_tab.classList.toggle("hidden");
    version_add.classList.toggle("hidden");

    version_0_tab.classList.toggle("active");
    version_1_tab.classList.toggle("active");

    document.getElementById("version_1_itemId").value = document.getElementById("version_0_itemId").value;
    document.getElementById("version_1_itemAmount").value = document.getElementById("version_0_itemAmount").value;
    document.getElementById("version_1_price").value = document.getElementById("version_0_price").value;
    document.getElementById("version_1_discount").value = document.getElementById("version_0_discount").value;
}

function deleteVersion() {
    if (window.confirm("Удалить версию товара?") == true) {
        addVersion();
    }
}

function switch_0() {
    version_1.classList.add("hidden");
    version_0.classList.remove("hidden");

    version_0_tab.classList.add("active");
    version_1_tab.classList.remove("active");
    
}

function switch_1() {
    version_1.classList.remove("hidden");
    version_0.classList.add("hidden");

    version_0_tab.classList.remove("active");
    version_1_tab.classList.add("active");    
}

function save_0 () {
    version_0_name = document.getElementById("version_0_name").value;
    version_0_itemId = document.getElementById("version_0_itemId").value;
    version_0_itemAmount = document.getElementById("version_0_itemAmount").value;
    version_0_price = document.getElementById("version_0_price").value;
    version_0_discount = document.getElementById("version_0_discount").value;
    version_0_timed = document.getElementById("version_0_timed").checked;
    version_0_timedFrom = document.getElementById("version_0_timedFrom").value;
    version_0_timedTo = document.getElementById("version_0_timedTo").value;
    version_0_visible = document.getElementById("version_0_visible").checked;
    version_0_giftable = document.getElementById("version_0_giftable").checked;

    document.getElementById("version_0_tab").innerHTML = version_0_name;
}

function clear_0 () {
    document.getElementById("version_0_name").value = version_0_name;
    document.getElementById("version_0_itemId").value = version_0_itemId;
    document.getElementById("version_0_itemAmount").value = version_0_itemAmount;
    document.getElementById("version_0_price").value = version_0_price;
    document.getElementById("version_0_discount").value = version_0_discount;
    document.getElementById("version_0_timed").checked = version_0_timed;
    document.getElementById("version_0_timedFrom").value = version_0_timedFrom;
    document.getElementById("version_0_timedTo").value = version_0_timedTo;
    document.getElementById("version_0_visible").checked = version_0_visible;
    document.getElementById("version_0_giftable").checked = version_0_giftable;
}

function save_1 () {
    version_1_name = document.getElementById("version_1_name").value;
    version_1_itemId = document.getElementById("version_1_itemId").value;
    version_1_itemAmount = document.getElementById("version_1_itemAmount").value;
    version_1_price = document.getElementById("version_1_price").value;
    version_1_discount = document.getElementById("version_1_discount").value;
    version_1_timed = document.getElementById("version_1_timed").checked;
    version_1_timedFrom = document.getElementById("version_1_timedFrom").value;
    version_1_timedTo = document.getElementById("version_1_timedTo").value;
    version_1_visible = document.getElementById("version_1_visible").checked;
    version_1_giftable = document.getElementById("version_1_giftable").checked;

    document.getElementById("version_1_tab").innerHTML = version_1_name;
}

function clear_1 () {
    document.getElementById("version_1_name").value = version_1_name;
    document.getElementById("version_1_itemId").value = version_1_itemId;
    document.getElementById("version_1_itemAmount").value = version_1_itemAmount;
    document.getElementById("version_1_price").value = version_1_price;
    document.getElementById("version_1_discount").value = version_1_discount;
    document.getElementById("version_1_timed").checked = version_1_timed;
    document.getElementById("version_1_timedFrom").value = version_1_timedFrom;
    document.getElementById("version_1_timedTo").value = version_1_timedTo;
    document.getElementById("version_1_visible").checked = version_1_visible;
    document.getElementById("version_1_giftable").checked = version_1_giftable;
}