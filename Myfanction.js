function toggleDetails(id) {
    const detailsRow = document.getElementById(id);
    detailsRow.style.display = detailsRow.style.display === "none" ? "table-row" : "none";
}

function showOrderForm() {
    const selectedBook = document.querySelector('input[name="book"]:checked');
    if (!selectedBook) {
        alert("يرجى اختيار كتاب قبل المتابعة!");
        return;
    }

    // تحديث تفاصيل الطلب
    document.getElementById("selectedBook").textContent = selectedBook.value;
    document.getElementById("selectedPrice").textContent = selectedBook.dataset.price;

    // عرض نموذج الطلب
    document.getElementById("orderForm").style.display = "block";
}

// Toggle details section
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
        const details = document.getElementById('details-section');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});

// Show form container
document.getElementById('continue-btn').addEventListener('click', () => {
    document.getElementById('form-container').style.display = 'block';
});

// Form validation
// document.getElementById('request-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     let isValid = true;

//     // Validate full name
//     const name = document.getElementById('full-name').value;
//     const nameRegex = /^[\u0600-\u06FF\s]+$/;
//     if (!nameRegex.test(name)) {
//         isValid = false;
//         document.getElementById('name-error').innerText = 'الرجاء إدخال الاسم باللغة العربية فقط.';
//     } else {
//         document.getElementById('name-error').innerText = '';
//     }

//     // Validate national ID
//     const nationalId = document.getElementById('national-id').value;
//     const allowedRegions = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
//     const regionCode = nationalId.substring(0, 2);
//     if (nationalId.length !== 11 || !allowedRegions.includes(regionCode)) {
//         isValid = false;
//         document.getElementById('id-error').innerText = 'الرقم الوطني غير صالح.';
//     } else {
//         document.getElementById('id-error').innerText = '';
//     }

//     // Validate phone number
//     const phone = document.getElementById('phone-number').value;
//     const phoneRegex = /^(093|094)\d{7}$/;
//     if (!phoneRegex.test(phone)) {
//         isValid = false;
//         document.getElementById('phone-error').innerText = 'رقم الموبايل يجب أن يكون صحيحاً ويبدأ بـ 093 أو 094.';
//     } else {
//         document.getElementById('phone-error').innerText = '';
//     }

//     // Validate email
//     const email = document.getElementById('email').value;
//     if (!email.includes('@')) {
//         isValid = false;
//         document.getElementById('email-error').innerText = 'الرجاء إدخال بريد إلكتروني صالح.';
//     } else {
//         document.getElementById('email-error').innerText = '';
//     }

//     if (isValid) {
//         alert('تم إرسال الطلب بنجاح!');
//     }
// });
document.getElementById('request-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate national ID (required)
    const nationalId = document.getElementById('national-id').value;
    const allowedRegions = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
    const regionCode = nationalId.substring(0, 2);
    if (nationalId.length !== 11 || !allowedRegions.includes(regionCode)) {
        isValid = false;
        document.getElementById('id-error').innerText = 'الرقم الوطني غير صالح.';
    } else {
        document.getElementById('id-error').innerText = '';
    }

    // Validate full name (optional)
    const name = document.getElementById('full-name').value;
    if (name) { // Only validate if the field is not empty
        const nameRegex = /^[\u0600-\u06FF\s]+$/;
        if (!nameRegex.test(name)) {
            isValid = false;
            document.getElementById('name-error').innerText = 'الرجاء إدخال الاسم باللغة العربية فقط.';
        } else {
            document.getElementById('name-error').innerText = '';
        }
    }

    // Validate phone number (optional)
    const phone = document.getElementById('phone-number').value;
    if (phone) { // Only validate if the field is not empty
        const phoneRegex = /^(093|094)\d{7}$/;
        if (!phoneRegex.test(phone)) {
            isValid = false;
            document.getElementById('phone-error').innerText = 'رقم الموبايل يجب أن يكون صحيحاً ويبدأ بـ 093 أو 094.';
        } else {
            document.getElementById('phone-error').innerText = '';
        }
    }

    // Validate email (optional)
    const email = document.getElementById('email').value;
    if (email) { // Only validate if the field is not empty
        if (!email.includes('@')) {
            isValid = false;
            document.getElementById('email-error').innerText = 'الرجاء إدخال بريد إلكتروني صالح.';
        } else {
            document.getElementById('email-error').innerText = '';
        }
    }

    if (isValid) {
        // Show a confirmation message with the selected book details
        const selectedBook = document.querySelector('input[name="book"]:checked');
        if (selectedBook) {
            alert(`تم إرسال الطلب بنجاح!\nالكتاب: ${selectedBook.value}\nالسعر: ${selectedBook.dataset.price}`);
        } else {
            alert('تم إرسال الطلب بنجاح!');
        }
    }
});


function showOrderForm() {
    var selectedBook = document.querySelector('input[name="book"]:checked');
    if (selectedBook) {
        var bookTitle = selectedBook.value;
        var bookPrice = selectedBook.getAttribute('data-price');
        
        document.getElementById('selectedBook').innerText = bookTitle;
        document.getElementById('selectedPrice').innerText = bookPrice;
        document.getElementById('orderForm').style.display = 'block';
    } else {
        alert("يرجى اختيار كتاب أولاً.");
    }
}
function showOrderForm() {
    var selectedBook = document.querySelector('input[name="book"]:checked');
    if (selectedBook) {
        var bookTitle = selectedBook.value;
        var bookPrice = selectedBook.getAttribute('data-price');
        
        document.getElementById('selectedBook').innerText = bookTitle;
        document.getElementById('selectedPrice').innerText = bookPrice;
        document.getElementById('orderForm').style.display = 'block';
    } else {
        alert("يرجى اختيار كتاب أولاً.");
    }
}

function submitForm(event) {
    event.preventDefault();

    var fullName = document.getElementById('fullName').value;
    var nationalId = document.getElementById('nationalId').value;
    var birthDate = document.getElementById('birthDate').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var selectedBook = document.getElementById('selectedBook').innerText;
    var selectedPrice = document.getElementById('selectedPrice').innerText;

    // عرض معلومات الكتاب والبيانات المدخلة في رسالة
    alert("تم إرسال الطلب بنجاح!\n" +
          "الكتاب: " + selectedBook + "\n" +
          "السعر: " + selectedPrice + "\n" +
          "الاسم الكامل: " + fullName + "\n" +
          "الرقم الوطني: " + nationalId + "\n" +
          "تاريخ الميلاد: " + birthDate + "\n" +
          "رقم الموبايل: " + phone + "\n" +
          "الإيميل: " + email);
}