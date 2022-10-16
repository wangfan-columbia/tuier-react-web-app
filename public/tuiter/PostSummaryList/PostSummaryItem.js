

function PostSummaryItem(post) {
    return(`

        ${
            post.map(p =>(`
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8 ">
                            <div class="text-secondary">
                                ${p.topic}
                            </div>
                            <div class="fw-bolder">
                                ${p.userName} <i class="fas fa-check-circle ps-1"></i>
                                <span class="text-secondary fw-normal">${p.time}</span>
                            </div>
                            <div class="fw-bolder">
                               ${p.title}
                            </div>
                            <div class="text-secondary">
                               123K Tweets
                            </div>

                        </div>
                        <div class="col-4 ">
                          
                            <img class="float-end rounded" src= ${p.image} height="100px"/>
                        </div>
                    </div>
                </li>
            `)).join('')
        
    }
        

    `);

}

export default PostSummaryItem;