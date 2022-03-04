var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999 99 99");
im.mask(selector);

let validateForms = function (selector, rules, successMpdal, yaGoal) {
   new window.JustValidate(selector, {
      rules: rules.rules,
      messages: rules.messages,
      colorWrong: rules.colorWrong,
      submitHandler: function (form) {
         let formData = new FormData(form);
         fetch('mail.php', {
            method: 'POST',
            body: formData
         }).then(() => {
            send.open();
            form.reset();
         })
            .catch(() => {
               error.open();
               console.log('Error');
            });
      }
   });
}

const validateRules = {
   rules: {
      name: {
         required: true,
         minLength: 2,
         maxLength: 30
      },
      tel: {
         required: true,
         function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
         }
      },
   },
   messages: {
      name: 'Буду рад знакомству',
      tel: 'Не стесняйся, пиши свой номер',
   },
   colorWrong: '#f26f70'
};

validateForms('.header-popup-form', validateRules)