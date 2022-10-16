

function PostItem(post) {
    return(`

        ${
        post.map(p =>(`
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2 ">
                          
                            <img class="float-end rounded-pill" src= ${p.iconImage} height="40px"/>
                        </div>
                        <div class="col-10 ">
                            <div class=" fw-bolder">
                                ${p.userName} <i class="fas fa-check-circle ps-1"></i> 
                            <span class="text-secondary fw-normal wd-text-post-small">${p.subName} * ${p.time}</span>
                            </div>
                            <div class="fw-bolder pt-1 pb-2">
                                ${p.text} 
                               
                            </div>
                            <div class="border rounded border-secondary">
                                <div>
          
                                    <img class=" border-bottom rounded-top pt-0 border-secondary " src= ${p.image} height="230px" width="420px"/>
                                </div>
                                <div class="fw-bolder ps-2 pe-1 fs-6">
                                ${p.title}
         
                                </div>
                                <div class="text-secondary ps-2 pe-1  wd-text-post-small">
                                    ${p.description}
                                  
                                </div>
                                <div class="text-secondary wd-text-post-small">
                                
                                    ${p.linkIcon}
                                    ${p.link}
                                </div>
                            </div>
                            
                            <div >
                               
                                <i class="far fa-comment ps-1 pt-3 text-secondary"></i>
                                <label class=" ps-1 pe-5 pt-3 text-secondary" >${p.comment}</label>
                   
                                 <i class="fas fa-retweet ps-1 pt-3 text-secondary"></i>
                                <label class=" ps-1 pe-5 pt-3 text-secondary">${p.share}</label>       
                     
                                <i class="far fa-heart ps-1 pt-3 text-secondary"></i>
                                <label class=" ps-1 pe-5 pt-3 text-secondary">${p.share}</label>
                                
                              <i class="fas fa-upload ps-1 pt-3 text-secondary"></i>
                         
                            </div>

                        </div>
                       
                    </div>
                </li>
            `)).join('')

    }
        

    `);

}

export default PostItem;