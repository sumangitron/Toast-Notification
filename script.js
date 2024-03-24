const toastBox = document.getElementById("toastBox");

const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check input';

function showToast(messege) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = messege;
    toastBox.appendChild(toast);

    if(messege.includes("error")) {
        toast.classList.add("error");
    }
    if(messege.includes("Invalid")) {
        toast.classList.add("invalid");
    }

    setTimeout(() => {
        toast.remove();
    }, 6000)
}