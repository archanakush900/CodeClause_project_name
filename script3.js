function makePayment() {
    var amount = document.getElementById('amount').value;
    var options = {
        key: 'rzp_test_vhF6y5mMOrXAZ1',
        amount: amount * 100,
        currency: 'INR',
        name: 'Code Clause',
        description: 'Payment Integration',
        image: '',
        handler: function (response) {
            alert('Payment Successful!');
        },
        prefill: {
            name: document.getElementById("Name").value,
            email: document.getElementById("Mail").value,
            contact: document.getElementById("Phone").value
        },
        notes: {
            address: 'Demo Store Address'
        },
        theme: {
            color: '#6af1a2'
        }
    };
    var rzp = new Razorpay(options);
    rzp.open();
}