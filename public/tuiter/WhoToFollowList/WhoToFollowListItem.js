

function WhoToFollowListItem(who) {

    return(`
    
    ${who.map(w => (`
             <li class="list-group-item">
                    <div class="row">
                        <div class="col-2 pe-0">
                        
                              <img class="rounded-pill" src=${w.avatarIcon} height="50px"/>

                        </div>
                        <div class="col-6  ">
                            <div class="fw-bolder">
                                ${w.userName}  <i class="fas fa-check-circle ps-1"></i>
                            </div>
                            <div class="text-secondary">
                                ${w.handle}
                            </div>
                        </div>
                        <div class="col-4 ">
                            <button class="btn btn-primary w-100 mt-1 rounded-pill">
                                Follow
                            </button>
                        </div>
                    </div>
                </li>
    
        
        
    `)).join('')}
    
    `);

}

export default WhoToFollowListItem;