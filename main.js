document.addEventListener('DOMContentLoaded', function(){
    const accordionItems = document.querySelectorAll('#accordion-item');
    
    accordionItems.forEach(item => {
        const accordionTitle = item.querySelector('#accordion-title');
        const accordionDesc = item.querySelector('#accordion-desc');
        const plusIcon = item.querySelector('#plusIcon');
        const minusIcon = item.querySelector('#minusIcon');

        accordionTitle.addEventListener('click', function () {
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherDesc = otherItem.querySelector('#accordion-desc');
                    const otherPlusIcon = otherItem.querySelector('#plusIcon');
                    const otherMinusIcon = otherItem.querySelector('#minusIcon');

                    otherDesc.style.display = "none";
                    otherPlusIcon.style.display = "block";
                    otherMinusIcon.style.display = "none";
                }
            });

            // Toggle the clicked accordion item
            if (accordionDesc.style.display === "none") {
                accordionDesc.style.display = "block";
                plusIcon.style.display = "none";
                minusIcon.style.display = "block";
            } else {
                accordionDesc.style.display = "none";
                plusIcon.style.display = "block";
                minusIcon.style.display = "none";
            }
        });
    });
});
