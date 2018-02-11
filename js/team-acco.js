const teamAcco = document.querySelector(".team__acco");
const teamTriggers = teamAcco.getElementsByClassName("team__trigger");


for (let i = 0; i < teamTriggers.length; i++) {
    teamTriggers[i].addEventListener("click", function(event) {
        event.preventDefault();
        
        let teamItem = this.parentElement;
        let teamMember = teamItem.querySelector('.team__member')

        if (isTeamItemActive(teamItem)) {
            teamItem.classList.remove('team__item_active');
            teamMember.style.height = 0;
        } else {
            let activeItem = teamAcco.querySelector('.team__item_active');
            if (activeItem != null) {
                activeItem.classList.remove('team__item_active');
                activeItem.querySelector('.team__member').style.height = 0;
            }

            teamItem.classList.add('team__item_active');
            teamMember.style.height = computeTeamMemberHeight(teamMember) + "px";
        }
    })
}

function isTeamItemActive(teamItem) {
    return teamItem.classList.contains('team__item_active');
}

function computeTeamMemberHeight(teamMember) {
    let photo = teamMember.querySelector('.team__member-photo');
    let text = teamMember.querySelector('.team__member-text');
    let title = text.querySelector('.team__member-title');
    let desc = text.querySelector('.team__member-desc');

    let photoHeight = getElementHeight(photo);
    let titleHeight = getElementHeight(title);
    let descHeight = getElementHeight(desc);


    let textStyle = getComputedStyle(text);
    let totalTextHeight = titleHeight + descHeight + parseInt(textStyle.paddingTop) + parseInt(textStyle.paddingBottom);
  
    if (window.innerWidth > 768) {
        return Math.max(photoHeight, totalTextHeight);
    } else {
        return photoHeight + totalTextHeight;
    }

    function getElementHeight(element) {
        let style = getComputedStyle(element);
        return element.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom);
    }
}


