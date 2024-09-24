// link of blog button to go for home page
document.getElementById('blog-button').addEventListener('click', function () {
    window.location.href = "./home.html";
})

document.getElementById('donation-button').addEventListener('click', function () {
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('donation-button').classList.add('btn-primary');
    document.getElementById('history-button').classList.remove('btn-primary');
})
document.getElementById('history-button').addEventListener('click', function () {
    document.getElementById('donation-container').classList.add('hidden');
    const history = document.getElementById('history-container')
    history.classList.remove('hidden');
    const donation = document.getElementById('donation-button')
    donation.classList.remove('btn-primary');

    document.getElementById('history-button').classList.add('btn-primary');
})
// variable diclear for history container
const historyContainer = document.getElementById('history-container')
// first donation card work start here
document.getElementById('card-btn-1').addEventListener('click', function () {
    document.getElementById('p-for-history').classList.add('hidden')
    const cardBalance = convertparsetotext('card-balance');
    const donationInput1 = convertparsetoInput('donation-input-1');
    if (cardBalance <= donationInput1 || donationInput1 < 0) {
        alert('you are failed to donated');
        return;
    }
    const giveDonationToMinuse1 = cardBalance - donationInput1 + 'BDT';
    document.getElementById('card-balance').innerText = giveDonationToMinuse1;
    const donationTotalAmount1 = convertparsetotext('donation-total-amount1');
    const giveDonation1 = donationTotalAmount1 + donationInput1;
    document.getElementById('donation-total-amount1').innerText = giveDonation1;

    const div1 = document.createElement('div');
    div1.innerHTML = `
    <div class="border border-black p-8 rounded-2xl">
            <h4 class="text-xl font-bold"><b>Donate taka:</b> ${donationInput1} Donate for Flood at Noakhali, Bangladesh</h4>
            <p class="text-[18px] font-semibold "><b>time:</b> ${new Date}</p>
    </div>
    `
    historyContainer.appendChild(div1);
    my_modal_1.showModal();
    document.getElementById('coin').innerHTML = `
     <img class="" src="./assets/coin.png" alt=""> ${donationInput1}
    `
})
// first donation card work end here
// second donation card work start here
document.getElementById('card-btn-2').addEventListener('click', function () {
    document.getElementById('p-for-history').classList.add('hidden')
    const cardBalance = convertparsetotext('card-balance');
    const donationInput2 = convertparsetoInput('donation-input-2');
    if (cardBalance <= donationInput2 || donationInput2 < 0) {
        alert('you are failed to donated');
        return;
    }
    const giveDonationToMinuse2 = cardBalance - donationInput2 + 'BDT'
    document.getElementById('card-balance').innerText = giveDonationToMinuse2;
    const donationTotalAmount2 = convertparsetotext('donation-total-amount2');
    const giveDonation2 = donationTotalAmount2 + donationInput2;
    document.getElementById('donation-total-amount2').innerText = giveDonation2;
    const div2 = document.createElement('div');
    div2.innerHTML = `
    <div class="border border-black p-8 rounded-2xl">
            <h4 class="text-xl font-bold"><b>Donate taka:</b> ${donationInput2} Donate for Flood Relief in Feni,Bangladesh</h4>
            <p class="text-[18px] font-semibold "><b>time:</b> ${new Date}</p>
    </div>
    `
    historyContainer.appendChild(div2);
    my_modal_1.showModal()
})
// second donation card work end here
// third donation card work start here
document.getElementById('card-btn-3').addEventListener('click', function () {
    document.getElementById('p-for-history').classList.add('hidden')
    const cardBalance = convertparsetotext('card-balance');
    const donationInput3 = convertparsetoInput('donation-input-3');
    if (cardBalance <= donationInput3 || donationInput3 < 0) {
        alert('you are failed to donated');
        return;
    }
    const giveDonationToMinuse3 = cardBalance - donationInput3 + 'BDT'
    document.getElementById('card-balance').innerText = giveDonationToMinuse3;
    const donationTotalAmount3 = convertparsetotext('donation-total-amount3');
    const giveDonation3 = donationTotalAmount3 + donationInput3;
    document.getElementById('donation-total-amount3').innerText = giveDonation3;
    const div3 = document.createElement('div');
    div3.innerHTML = `
    <div class="border border-black p-8 rounded-2xl">
            <h4 class="text-xl font-bold"><b>Donate taka:</b> ${donationInput3} Aid for Injured in the Quota Movement</h4>
            <p class="text-[18px] font-semibold "><b>time:</b> ${new Date}</p>
    </div>
    `
    historyContainer.appendChild(div3);
    my_modal_1.showModal()
})
// third donation card work end here

document.getElementById('extra-button').addEventListener('click', function () {
    console.log('is');

    
        document.getElementById('donation-container').classList.remove('hidden');
        document.getElementById('history-container').classList.add('hidden');
        document.getElementById('donation-button').classList.add('btn-primary');
        document.getElementById('history-button').classList.remove('btn-primary');
    
    document.getElementById('donation-input-1').focus();
})
