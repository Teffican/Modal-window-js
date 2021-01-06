window.addEventListener('DOMContentLoaded', () => {
   modal();
});

function modal(){
   function bindModal(triggerSelector, modalSelector, CloseSelector){
      const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(CloseSelector);

      trigger.forEach(item => {
         item.addEventListener('click', (e) => {
            if(e.target){
               e.preventDefault();
            }
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
         });
      });

      close.addEventListener('click', () => {
         modal.style.display = 'none';
         document.body.style.overflow = '';
      });

      modal.addEventListener('click', (e) => {
         if(e.target === modal){
            modal.style.display = 'none';
            document.body.style.overflow = '';
         }
      });
   }
   bindModal('.main__btn', '.modal', '.modal__close');
};