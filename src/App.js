import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {
  
 
  render() {
   
    return (
     
        <div className="maincontainer">
        <div class="container">
            <div class="profile-page tx-13">
                <div class="row">
                    <div class="col-12 grid-margin">
                        <div class="profile-header">
                            <div class="cover">
                                <div class="gray-shade"></div>
                            
                                <div class="cover-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <img class="profile-pic" src="https://64.media.tumblr.com/b629cf99070a0b65e03b48dd46bbc72a/tumblr_p7ptv253QH1u9hpjyo1_640.jpg" alt="profile" />
                                        <span class="profile-name">Ady Banik</span>
                                    </div>
                                    <div class="d-none d-md-block">
                                        <button class="btn btn-primary btn-icon-text btn-edit-profile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit btn-icon-prepend">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                            </svg> Edit profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="header-links">
                                <ul class="links d-flex align-items-center mt-3 mt-md-0">
                                    <li class="header-link-item d-flex align-items-center active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-columns mr-1 icon-md">
                                            <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="#">Timeline</a>
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-1 icon-md">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="#">About</a>
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mr-1 icon-md">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="#">Friends <span class="text-muted tx-12">3,765</span></a>
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image mr-1 icon-md">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                            <polyline points="21 15 16 10 5 21"></polyline>
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="#">Photos</a>
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video mr-1 icon-md">
                                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="#">Videos</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div class="row profile-body">
                   
                    <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                        <div class="card rounded">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <h6 class="card-title mb-0">About</h6>
                                    {/* <div class="dropdown">
                                        <button class="btn p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal icon-lg text-muted pb-3px">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 icon-sm mr-2">
                                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                </svg> <span class="">Edit</span></a>
                                            <a class="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch icon-sm mr-2">
                                                    <line x1="6" y1="3" x2="6" y2="15"></line>
                                                    <circle cx="18" cy="6" r="3"></circle>
                                                    <circle cx="6" cy="18" r="3"></circle>
                                                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                                                </svg> <span class="">Update</span></a>
                                            <a class="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye icon-sm mr-2">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg> <span class="">View all</span></a>
                                        </div>
                                    </div> */}
                                </div>
                                <p>Hi! I'm Ady.</p>
                                <div class="mt-3">
                                    <label class="tx-11 font-weight-bold mb-0 text-uppercase">Joined:</label>
                                    <p class="text-muted">2022</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 font-weight-bold mb-0 text-uppercase">Lives:</label>
                                    <p class="text-muted">Chatswood, Sydney</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 font-weight-bold mb-0 text-uppercase">Email:</label>
                                    <p class="text-muted">adyybanik@outlook.com</p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-md-8 col-xl-6 middle-wrapper">
                        <div class="row">
                            <div class="col-md-12 grid-margin">
                                <div class="card rounded">
                                    {/* <div class="card-header"> */}
                                        {/* <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                                <div class="ml-2">
                                                    <p>Jassa</p>
                                                    <p class="tx-11 text-muted">1 min ago</p>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <button class="btn p-0" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal icon-lg pb-3px">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-meh icon-sm mr-2">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="8" y1="15" x2="16" y2="15"></line>
                                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                        </svg> <span class="">Unfollow</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-up icon-sm mr-2">
                                                            <polyline points="10 9 15 4 20 9"></polyline>
                                                            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                                        </svg> <span class="">Go to post</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2 icon-sm mr-2">
                                                            <circle cx="18" cy="5" r="3"></circle>
                                                            <circle cx="6" cy="12" r="3"></circle>
                                                            <circle cx="18" cy="19" r="3"></circle>
                                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                        </svg> <span class="">Share</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy icon-sm mr-2">
                                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                        </svg> <span class="">Copy link</span></a>
                                                </div>
                                            </div>
                                        </div> */}
                                    {/* </div> */}
                                    <div class="card-body">
                                        <p class="mb-3 tx-14">Knowledgeable and thorough student who is working towards an undergraduate double degree of Commerce and Computer Science at UNSW. Driven, self-motivated, and therefore effective at completing tasks with minimal supervision. Confident leader and enthusiastic communicator who is fit to join or lead any team.</p>
                                        <img class="img-fluid" src="https://i.pinimg.com/736x/7d/80/b3/7d80b3171c9099d72bf10e91a245505a.jpg" alt="" />
                                    </div>
                                    {/* <div class="card-footer">
                                        <div class="d-flex post-actions">
                                            <a href="javascript:;" class="d-flex align-items-center text-muted mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart icon-md">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                <p class="d-none d-md-block ml-2">Like</p>
                                            </a>
                                            <a href="javascript:;" class="d-flex align-items-center text-muted mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square icon-md">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                <p class="d-none d-md-block ml-2">Comment</p>
                                            </a>
                                            <a href="javascript:;" class="d-flex align-items-center text-muted">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share icon-md">
                                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                                    <polyline points="16 6 12 2 8 6"></polyline>
                                                    <line x1="12" y1="2" x2="12" y2="15"></line>
                                                </svg>
                                                <p class="d-none d-md-block ml-2">Share</p>
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            {/* <div class="col-md-12">
                                <div class="card rounded">
                                    <div class="card-header">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <img class="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                                <div class="ml-2">
                                                    <p>jassa</p>
                                                    <p class="tx-11 text-muted">5 min ago</p>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <button class="btn p-0" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal icon-lg pb-3px">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-meh icon-sm mr-2">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="8" y1="15" x2="16" y2="15"></line>
                                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                        </svg> <span class="">Unfollow</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-up icon-sm mr-2">
                                                            <polyline points="10 9 15 4 20 9"></polyline>
                                                            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                                        </svg> <span class="">Go to post</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2 icon-sm mr-2">
                                                            <circle cx="18" cy="5" r="3"></circle>
                                                            <circle cx="6" cy="12" r="3"></circle>
                                                            <circle cx="18" cy="19" r="3"></circle>
                                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                        </svg> <span class="">Share</span></a>
                                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy icon-sm mr-2">
                                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                        </svg> <span class="">Copy link</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p class="mb-3 tx-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                       
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-flex post-actions">
                                            <a href="javascript:;" class="d-flex align-items-center text-muted mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart icon-md">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                <p class="d-none d-md-block ml-2">Like</p>
                                            </a>
                                            <a href="javascript:;" class="d-flex align-items-center text-muted mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square icon-md">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                <p class="d-none d-md-block ml-2">Comment</p>
                                            </a>
                                            <a href="javascript:;" class="d-flex align-items-center text-muted">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share icon-md">
                                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                                    <polyline points="16 6 12 2 8 6"></polyline>
                                                    <line x1="12" y1="2" x2="12" y2="15"></line>
                                                </svg>
                                                <p class="d-none d-md-block ml-2">Share</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                  
                    <div class="d-none d-xl-block col-xl-3 right-wrapper">
                        <div class="row">
                            <div class="col-md-12 grid-margin">
                                <div class="card rounded">
                                    <div class="card-body">
                                        <h6 class="card-title">Liked Photos</h6>
                                        <div class="latest-photos">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <figure>
                                                        <img class="img-fluid" src="https://i.imgflip.com/6861fq.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div class="col-md-4">
                                                    <figure>
                                                        <img class="img-fluid" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQPDAwUFBQPDwwPEQ8SERAQEREJDwkPGCEZGRghJCQcIS4lHB4rHyQkJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QERERGDEdGB0xMTExMTExND8xMTQxMTExMTE0MTQxMTExNDE0NDE0NDQ/MTE/NDE/MTU0NDE0MTE0P//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEkQAAECAwQFBwgJAQcEAwAAAAIBEgADEQQhIjIFEzFCUkFRYWJxgZEjM3KCobHB8AYUQ1OSorLR4WM0c4PC0uLxFRaT8gckRP/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACURAAMAAgMBAAIBBQEAAAAAAAABAhEhAxIxQRNRYQQUIkKhMv/aAAwDAQACEQMRAD8A9lhqlCUoZCOv0HA50drDUSHIkDLCKsdhUjsMsgFCjsKDgByFHYUYxyFHYUYxyOwoUYwoUKFBMchKsMMqIXRFPa9MgI3ZsX5Wr8aQtUp9Cpb8LuGEYptVEjJT9OTCFW4RLELd0diJWGHalFpKRcTnZyLLTi5V9aJPnleFFw0bOscjK2fSBtFSXC7AJfacNEHkizsekBoriJS5VJre5EXCnbDTyzXgtQ0XMKI5ZoSVRapEkVEFChQoxhQoUKMYUKFCjGIV2wkhLmhyRH6MdSOokJIdFEhTkKIjnCGZUSM/pbTCCbQxU3m4fFCRYFUpWxpl09Fna7egXIqJMTEwlZrR6F2LAk7TSLlRWqKO45JdKcqRm5ltQiqZOH1nS+lIiKYozhQ3NPCMxvtWnJSOaues6LTwr6aeRp8VMhJKUHMnEl+z0b/VWDLJpIZkpCVUc4gJvOnKnRRUXvjENIphIqoJC70Zm8Kc8GrTC3C5p9XhjTzv6F8K+G9iJZqNVa1btbGfmaRmmOHqtER1mEk5awJaJ5K0lXFldy8S15x7Yo+eV4TXDTNOlqFVpVNhL+HbHRno1SJUQf09C9MZZVXUktSB2VvD0LzQNMtpGIy6iAiLsPV+K1vWAv6hfoP4WaS36VSVLWl81WtD0lu9kVsrTJUFFRwjeZfel+1YqgNHCRVykTi3yH0oHAyJwgBKItJ27M6L+2J1zU3opPHKWy3tOk5hDc3EOL+ne7vio1ZEBVqjMf6YsDoBDTEQlj+zFxc6w8jE3NAiHMRYmuLnUonTqvRpUrwpUNcuxwyxxFuli8aQeSo+XVNYIC0AB0wXc6pchQksjHKqOMsrR1g/x2wp8/yY1oLRwMHWMLexFl90THCVMnCogLiFou3OLZyw4GhnQEMsueYPesU9m0lhuuaWICzbcXf2RY2e1CZPRWkW4WQ/9K9Mbw3potDzFJCSotHdH9ot0jKybRQnCpiQk3Fuu5OxL400mahiJJsLZHfw32k4+SetEsKFCiwgoUKFGMKFChRjEcdRI5DkiS9GYkiCfaRlpirE5LRIqLdbAcqIaAXVllOP3XQ1PqgJZYDpfSQqOFyfip76Rl7TaiIcDnO3f2LKkE6XUiPPMLhEmy8PYNPdFKImUwkRBlt/Fsdeg3RxXTpnXEqUHWQZplU7h3JTRmHM6a0qiQbLsaCDiNvEAlqxlkPIiRUpaiAhMiz4R4z4r91KRNYzUzcqZiaAfeFvX8yJSF6sPYsgsauua8xyj+VajfFlZ7KjGk0THKW92KkdsdnYNcxFwkXsjlrlmBCq5et5QpY4b+nvjYNkltCNMVRVRgtb94PKtej4wLPDWkaCTBxEJbrhzXr3wxbURzBJBFoCYuJzTE1F2GHWk2EDkBQJuER1YyxxcPfB65B2IZNqeQiSYAF33g9XthhAhneqNxZh1ZbXDVd1PfCtAEJCxUQTw4hLmw37B7+GBjMhMnpiIjFzdZrG4RpyfKw0yB0SIZGIKTMJZQdMFtRElrsursg6XKUmqhAJGR4CE8G6KqhcnJXrQFY5JEJDU0IGvAvsyJCElpzVWLMCQxN2Eia4hLVaw8poiLl5/WWGwhW2OkWERDCgYScQu1guJG3tXnWDLLZiEQqiOxYSLd6E+MC4CcuE5RG7C6XM2C2nzuwwZ8sRc48LXF5sgv2p31ujPBthYgSuoMsQLMe74bYrtI6LwTKXoTicXkx7r1p7Ishnkg3EJyuIR3elOVIIOSRJVKN9LN3UhHOVoZUebyAIRNVVxBMF2IZmGhco9kWWj5uE0o8BISbvTAJRGqdi8nWiXTFh+rziMRoBOIm/aEXOm7yxU6IJGy/XH1TbCYKGrss5DdVSIRw4vs+hYutGW8jaK0w4ejuRNq0jHS52ESFXbswRzFwr3/vF/YjKU0hEhFv953LDcN9a2JyT2k2EcgGyTTIUJaNXYItg+PQTycYoUKFBMKFChRjDEhyQ1IckIvQsrdI1YVSIR6o+zpXsjPYhEmoIl+bvbdGjt4IoYloNOtj6MN9O+Mda7QQcooOYvR6E2DEP6gtwgNrl2jFsxdYfFfnngSUpaskcLiInF1d6/e54edqI3IitFriLzhdyfOaAgRQFxqpC5pCWaYOIirEJRagfStqRwJlEsPWYKERInj74vfofL11pNzWiLvVNXCKdyfljJWi2DNkipboFu7xKRU8PhG4+hFmSTJFRTEQi05haw9XuoiDl74onliPSNLbCURw4BHCP/EVVpt3Qo7pTSzNptw5YuLTVpKqgI8R5i7oz9ooRE4nCOUPNvIs0bqDIFNImuEh1UwhEvs8ArtTlg0JyGQiT90hAspDQSG/duvpfFbMmg4aqmqEXCP3hZSp0Uh56QR4oKoBOEhd9oxSuV3aiRjbLe0kmpaHk55GIi4tyvJ00u9aATkk6gkzdNzZmIUw0pl5YCnaYAyKtM4k4fsr9lO2CpNuQzFKojHOIuzn2bV/NC1WBpkMGWpG4SP6zLxETehpV5CSKTS+mGul5x4jzYfnbBdstSBLJznjiL1sqYYxsxPrEw3mkmULiOb5zVju3bSVVuROVSSFnYzWCwmaecQIiqDMIN+MODTamWJat/DtdfFAenbPKIhCz6yWObWTCfNEUpVUCiD3VpzrF7YLBJ0jLI7EiybYOKZZDPXCQDtICJEVb6JRU2r3xXqn4L5tmisWkUfyMY0h3TGNLYposalQJrm+cEh6F3kpfzx5fou3EJcLMLS/DRUjdaDtOElR26RA7WD2pw90BGaH6b0ck6XW7rGA6zDvVjBhaFAjy4DaDeAlb4USPUrRNRRJFFwtzC1wl0pyp0x5RpqyFKtM1UFggIk3dmXtG7dS+sZyZUXOi7UoHxiYuHi6y/GLgCF+bVnuk4pYzIx2iprzlDlIRJvo12L880aSfMGaAoqPEcRAXlC7U5YhSwyk7RqLBaCllgYRFmxODwHYvTGmkKSgilRF6I8+sBSgaoEQGPpS/byxrbFpcSahEI5cS/aR1cPIsYbOfmh5yi7hQx6UrVGw+OogKFChRjDEhyQ1IckTn0LA7XKcC0FFLrEUvxpyRgtLSTI2qxXboOb1c2VO2PQbXTVlVaJy4dZ7IwWlDfPcmUcTiL27VifP4W4fStOcEnDRVEcRkI4ZhbqJxQJpSb5ElRWlw+kmFPDl7Ynmg6ZLdU+H7MZfEv7rybID03OURFBF+Jxf1B/bkSOWSrM5bSEiFUcgZDEc2zD/zHp2gahY5SpgEQF3Fs2KsedICnOoDRMmtIvKcTbt7lSPRdHAoSwE7yEBzcVPd0JFJ0Cgsp6kJLVMuEWi2X0qqxnbVPFx0VxDmLrFmv5qfqi4tyOEkT1oyOkJrbkyu/NAqgSgW1zz1cyYLmAQg7rk5ifH1YqtGJaNI25LPIUNewzdMLUiApSt6Iq1vTkjUSBSfo60yBTysubLtIAOa1CKEJinOtKqiRi9I6BmlOWdZyFRMnYT1MyQRXKnIu2sNDlUlT01/0ZqnLcrLyPkWsnWkC84BEBN8oLwVUVOsly39kXOiLepkFV3Wl6qNGM/YrN9WHahTBdl4qNpBGigIAfQmPb7HEnhArDTwbaaz79NdMmrq6leRlxcKN3oyk41ImLvFiH8saEiQgoK1aGF34ir3RQ6SlKd4o6Zm/lV2Qkr1fsbOMP8ARVaH0/O0VabdSXKmFPllKLWjrBlotWknOlF2csaL/wCK5cwNJ2Jb0cMx/wDctXb0ZfZFdKtRsESCWZBlIw1hyosbJOnAJjKzzAbNm+bLV5mpwoq07eWLPkbwmksfyL0Sy085JdLGJaRtJBRBmTDMW5Zl5fhi+0TaTBq4m9XNL/1bIzwWGY4aIitHdzeMaPRUhWDeIlw+jiudcUSqvpkvhoZekQMaoSj6OaX3FGe+lUvybkbMHM52KX2NSLHXiJEiiJOxZcUsu3eTpiYlCbLIVliQF1S/lqwZrPoKWDzvRRsIK7ov9WuH3RbaJnEZnVXEJGQN+0GuJE7v0xR6Vl6qeaApNEW+qOGiwbZ5yjLFQzNH3NFU8INTkM0ahLQJFcqN3hL7R3L2xYWGe28CRfRLzfahRTWachiREIllL8WavTWDpFpFtRqBdQfOfi5eisQTaZRpM22jdICQi68uInexKXRbiaLsr4FGGslrmbUVfSAvem2NNoy3KdxL+IdV/wAx28XL20zk5I67LiFHKwo6CQ2HJDYYZoKXqiduyIy9hK3S1sQZZJWi8zXJ41SkYq2GuJVa0cTXYpnSq7qRb6btTphIV7SaPU7OJIzVqVMQoTzMt7yhO51ToSOflrtR1cc4kCtE0ybc0j62cd30U98Bzp+dT4dWP5b/ABixtM4Ql1S8gzF1qe+9IpCnPei5XyyH0KNKAlgLGaMQ5tpAgURISbi9ZtOJeWPRJQsliKLUxHGZfaFvEsYP6P2Uvr4URSAMREOV2W/tpWN8pq25o8X2kAwEZ4DcuERy70ws1/R/EZ2dZ1OYKULew/eFGqOyrNElflxMaLfGArNo83uwoAiQu63zywMMGUZhLPMcLHuEsJg57t2jct8ct2iJu1ScZERGWKWTR5V4ljTlJEDJa0cOH1ebogArerj6uHd5hd+0YyZmk0MotUkwli60y9sTS7KwWVpKEiIf+OyLG0zFNtPn+IhGzGYku9BbX1hSJLPMADEVaYDmLegczHGiVFvz7KQ2ZZ1ASqoiRF+WGBJeW0M2bWD7o2jbDLNJDX0RUYW+QjLZcI18VWLSzWQXGqoIkIi7F5xq8qjzokUv1QgIVRq5ssTWa1GD1XMX/qPvWNlM2GaaVIQXKquHMQi3KXLh7odqAMyRTYQk4OGY7IqKPLzxSWLS+MUVDUd7Fq4tLNapc91DQADddrO7Z8YPXJs4CgsobFcJiThdMFvWoty3xIkwAKnlhLrCXhWGy9HShaj3kQjmEXCPbEwLqnYhMOISxS/VXlgKcMzrJl/pbYtbLM0QVIRLEQ6s/HYSRlLPalHVou7h/Cg/xHqdsJDlklTUW8Or/THl+m5TDwobXliJu9h96RT0Qt7NbVG0tHCJNLFl2NLui5S142qjC/LM7t1elIylnnocwPQbGitCocgVztxdZm9TpSI1OysstJZK69JgdcSw9/DF3YTImquLhIfnDGc0eZMGiqYkOHFqyiysUxBmYTMSHMP7pCKnLGcqkbb610L+L+IUB65ef3Qop+VkfxFysD21WyTVFo0YIio0ySsJGoWHgcwelVWiR1J6bOdLZktIzhxVETLh+aNioMwASJUaWXAXsTigjSFBPP6Qhmb2rlgP6shmAogI5pERcPSu6kcp1goCpjKRUb5QzIS8nhq0ExKnLSCj0aRgFJAk7KQzA6xD0jGu0XowQljipMaLmzCmDMLs7YsPqSiDixD1m+9YpM/WSqjP6G0eNncoqeLEQCITBdTlWlS8Ys51ocQossj6wiLv2Hxhk/SSStiAg9V0wvEvgkV822zZ5FRT1Q5nFqR9nJDPC8Atk5piqLmjia3E7tGqRHMnuEblQW4uKBDnPEhBWlvasi99YAmzlAREimKRjxF5PhvidDJEdtnKJEmXNid5sd68ssU1p0zLC4U1hbzvJj/uiHTlqIPJVzYiLq7qfGKElh44lSyzVWHhFjaNOzSKosD0BxeK1gGdbpp5jMvWL3DEKrDVGOiYleITLf0YSw2kS0jiC6HFwclmQFUVUS6pav8ATB8jTE4NpPHhPyn8wC2OKMByq9QcteGos2kpdow01c0sLdyZ2L+8WlknCJiBCGHiIvBG3RhgVsajRtq1sglVHTJOYfvQLKvbyV7I5+Ti67XhSa7aZvrLahIaIksSHqlDlsRGRKpqbswj5OKLQ9plmOMTIhxF5QvV9GNLZpktlAxCWIXFrNZ33ws7AxBZ5IbVIC6xF7hu9kU30i0dKnSSbQTHEJDLBx/PbB8+wumVGpluiQ+b7C+CwdIlEI0IVw5gcMz2DDgPIrTZClWksJIIkLcPRhyxYypzAmV32tEuLep2pG10toqUYGoy/K/1RmS/CuztjC22URCFW5twtYLhaI/GJ1I80XkhUIMJZMQtzd0WdlqcwTK4hHE0fORRjJ+r6ok4Rd638xd2YsTky4S9Uk5Ujmr+C8mo1yc8KI6jzj/5IUIE1EUP0gtCiFK3ekMse9dvui9jKfSOY0iQ/Nt6vglL0jvp4lnDxrNGQKhTKolesWTDzdHTBv0fs2utOwVEWOIhxTN6nV8N6BmqZGWwGtEPS5V7kiCwzWWiUqrQiIXNHWFvDRE56UT1ojPp0Pw9QQVQUogD1lH3JyxXW+p4XKpFlL3rTZ2QbKKkkHCgk0RISLELuS7YsCCb5k3EiCAi8vuy5BSOlnOipKTLA9izDH8Mv/VA42ojwy5YmRFw6wJfSqlcUXJyQ1ZKSUB2EBLWFai6fZ7Yq9LmQSyVVEBERFksd4kwj4csI0Mge1zPszOpuxDKEXO5lXYMUlqR5iibuEcWs9pbV6YNCyqAuJSUsTvSLN+0V881AxRUF28O7KHmSJV4URj9Nmv1yfXdJvqijYr1WLL6TS2Wsi3ZmMf0/CKxDwx1RhysEq9Y5IcA5urEJTUjgnFAZC9VhqLnDiPD5seeCQsguFEfMDLl1OMkwpVc0ChaHXqqruzG5pkvDylcUEFakcaqdCcJgReWmTOEXCtBjGIrRLaRJlIHPEmy8Q8icUDEnN/uhs2c5yrmInFA/wBbQeUYIGwtAi1+j81lpFOLD/eO/mKeTMeMWWhh/wDshXiH/Dhb/wDLyGfUaayWpZU+5Wuw9WNLYE8phGZLduyyFrt6qRkVniM6q0zb2V2aNrofSoENDYJejh8PikcklqDjlPap0lt/qF5UelLr4KSY0WoIF1nFl9b3QTZreJFRGlwn5sW9HLBNEJRvAy6VHD2XxYnkhCzKQ4maveHFFPpXQ9nYRUCWIl1fYlY0ZYbqUbvKN3ciQJbpQGGNEL56IFTnRlWNmAtVnQhJBxNEv8S93jBGj5WHrZW/eDXD+0X4fRhCJwk0DvIRLLlal6bdqeEXNj0PKktVEqXzXuiK4G/Sr5kvCs+qL93P/FKhRqGJzRyH/t0J+djTXCv7tjF6YNDIyJcI5Wjd4resa21zGyiXe2ILdY4uanLGGt5EUwlN3Fi+0L1boF7WAcXpVgWGbd/7FhFIGmSnWuUiK3ELS3XDmq3k6YKTERDwOIuuX8VhaLla2fKdTPvft4RJLZZ4wb4LMmrG/FmzE3ponKsMGWGy5oiRCLh3cyqnJ2w+1mwCSpboj6PbtgSXLQhqaCADiLETm15eXxjqxo5xWqx4eEWumGJFl3RTm5qwPOsokwKIkoMZluuwtFPCkHnPEwIjulOFo+6755YGVExkioTiHe4kw+z9UKxivmiwJjkHA0upLInNqvQlIy9psxPqakhTHEPEwUcSrwptjUaX0Ys8KVXVkQkebypEn8wHpaQpARCgkYPlDw8NE7vjE3sK0YrSthW0yHBectxD/UDeROm6MdaZ7B2R6P8AUiBoouEMLvRR1YzuntAfWB1knDNLEYbs3pThWG4r6/4vwNTnaMBMtJEW2C7BalUqLEM+xrLIkJwtiKz3TBpHUc+y8d0w5C9GIUWHDBGBtI2ho0TMXzWKesHaUrrB9GIZNmeVEv627GFfoTo6crhSt0bbQlmaJTCuc4ZbvtC+f1RWaE+jbkGZMulJu5da3mjSLLWa1AFoSyBvDL+aRDlv/VFonG2PkWApoiQ0XE05RZtu1OKL2wWFhDdRuaWeUxLDc7L8I7omSOJyNEi3vspgqQ0Xou/MkXkyUJtluaQN9IN4VvzItKdCxFDMNkaMlakSESmcLSxBvc9/ZtiezGDSwg4RdiDV4a+yIbLLORLJULITTdsmii3L1bl2wdNJTEkaBCQkWbfTYi9CpW+HQjJZExw3EtXYU857/hEdtNWF+H5bEMoBYKotHcJYurTnWFNJWFXELcw8W8lN2HTA0G6MN0kUoVOIh85BkA6LXyI4neqMsZfQlEg6HyISwoUKGAR8sVmktFjOFV3kHD6VRKq+HtiyQocixzTXxh2jHT/oqQlgJFEm/wCVC+KwN/27Mkk4lFJaM7XctOYUjeIsDWySpgSIqI5KOa4h7Iqpl7Qe9FBPniJBvNEWjuhdthsxUK5MLicRDl713liq0iBBMOXePC4scwedUTZW9aRyVNUAvxDvfZkQjydVIV0k8DY1ks0BDmY3G4SERFuER5fH2xOMtNWKrvFl6u+vhdFRZ7YLySrcIiRD5PEWUU6ESLQbSJjTKIuEvR+UjYQcsIs4FNCtcJG4B+7ajfhFXapbHIiua0g/vDwl4IlYsVmpqyTE1w+7bAR0IAKhI0sX9PLfCtBTKu2KJa0L3C7LmfupXdSiLfAR2NwAiK0jJo+DvgsX52dNYcxcIiGLLmNCK/iolIFtFjXyCp9nNH0hAhK/xSEc5GVYMZpXRcu1iSqjJ7cRj9p0qkYjSP0fmWUnKLgdhMchf6e+PWLHZ2zzUkwkQi30mu98CW6zLZzNFxgZmIjuzAo69NnLGnkqHj1BczR5eKw8VSNpaNG2UhqspELDlIpeb0YlsejbOBCqShJ+EX+UxD6UV/uZ/TF/E/2Yux/R+dbDqIKo8Xmxl9qldGr0V9G5NlMNcpTOIZZYR6K0xd0XchxjhwALhaOXCuJKDFjJsbxISTyoO/Dib7onXNVaWhlxzP8AJXHZ3zyZ5oDEG9U0cKe+LSy2IZACiXjMEjEd5u8nairEOrQzBuGYRE5uU2I4CVOely+jFyYoICqtXARji83/AMqtIVI1MhqgXKjsBER7ss8NypvXXwXZcZFejwIXDhmC2g3dl/PDbOolfeImLDEh8434p7YYclhCYYhHCWLzjUbf7F6IbAuQ4pStmtWh4SxOY4cNF6FgqzDhG5mESw5gIcJDXl2wME1cypTKJiQ6vWdNd66BbSEwJkswIiljnFpNmCWVV2+PPDpCssAmjNEkVGkBudhc2jfV2xDaTEHIKkrsLsXxhTrRvJRrcRCIzB4b+6HaMswziIiTCJCQju9qUhsZ0DONlxYRIZIIWYRieOIjbo7ByISwoUKGyAGUryhyFEKrevpR1CjjyUwEosORYgE4kQoebwK0Vls0RLNCVBopE4iFMcymxK7aVvWm2MlMkKDhJDFzmuzTBrhj0JFgHSWjxtAUVMSZS6enoilJUtehmsPZ5nbhUHKiqJOcX9Pdv7oPsGlgIhFKtwD6WZxeCfmh+mLAUotWWTM4R1YuJ21VzLT4RTWizLtFyE7C3qo73RFU5eGXaVLRrltwmVdgCBE37xrtvhWOWG0ul1VcRbpbg4oxsszEhQ78wt/fxpDweI3EouxEW9haNPZD/kQnVmtmgvl7yxucPoo4YfZpitkXuyvIvWEVjIJOtEqYSoTxJzhMsOJObkgwNMEJipDhYWIeqpNREGM6XwPVl3bER4KO+RD6wqJV9kMt8h4hxCUzN1kw077oBlaQA5zkXCAtEfN4qYaO7dsK1aYltDEKERmAudLeZKLkTipWsJWx5WCrnaOV0hVTC8hL0RcQrD7NYnSwpuCR+sTYK/6oBzGooq4Bd/Tc4a+xYmGYyXKZRXG0vRLD/MKNgns9nQNUmUTcResgj71gyxq+Y/eEPVmcXgqrA5C9yIuIS/8AGIo6kIahYySjiECJ284VH5pGkWiWzWVs+1kmUGlL9GjS9ywQMt5GK5Sly2j3EW2FKNBl0T7QmETuJB/dYfo41MZW6UkSln6qC1YskTY21NECIRcQGLmkWIqYvnqwWYC+qN8oGX7tyc3s9aFZpgkU0Ta3i/D8I4poJeqLXdVxQUsAyRSSLyqLicLcRavLhupliCz6QIAFDVpZcXlNXxJ4wJO0wglMaOEhwl92RZu2JdC6Jm2i0ypk1ySgIZoj94O6vZVO25IyrLwjNYWy0sVjKcRErvq2YfsymFV13LSNDKARG5BSHCrXekRQ0EbDul4iXo+FWFCgZCSwoUKGyKBFtX0oUcXavpQo4exXA5FiQSiGsdRYbJglFh6LA4lEiFDKsCtEVpsozgaYiXM5MpUpVIxeldEFZiIkR0oToO8WLlX2RvEWB7ZZkmyyFok5Gq5SG7tS+K5VLDNNOWeaFZXESrhESw+qm32RJ9XQes4XCPf+8XOlNBqAk4xAHYRB0xRHnV2VOi++kVKojyJVRxC0BdibV3jtiNQ59OiaT8IyloJtVCIia5u4Ndiw0pSGJIOFhZm4ZglmVIcM1GTRXO13qk5qdWCANAEatRjXcOJHfPowEM2D/wDTRK5E3W4h3sO3xhh6OAxFFHLiH+n0pFlMBdZ1Wk3+odW+6sSqKBqxrm6uJ3zydaGWRXgpE0Sm1MJO4cPENV746NkMAoKrvN4t4vjF2ElTGiYXuMuKZuj7P0xGi5ERuASIm7+7d74OzJ4ApFpULyc9ovaPnCo0k+eKCAnIZ1xJm93NEiyG4q4cRO/SlOiOyrKnkl3sQuHLhzV4YGDZA59tURFASmLMXV6IVntpAMzrnLMfSFSIvhBNqsqCVSw8XE3nT9oHOcIDtcOYS6uHZ00XZA7NGwmcMCIyxFi/y/xEsuXMmuRHKW83dvRBXoS9IqDt84zFiIIuHNmaLhJF7bosrHbJoEK1oJZ2tbMHmoV0bO9s2NaNNor6PIBIU1ELq4SDv6Y0NUERRLhS5PRis0ZpUZ40di4W6vuixivZJYnwhWW9nY7HIUZMU7Cjkdh0YlhQoUOABLavbChLtXthR5mdlxQ5IbDkh5YrEixKMMRIlRIoKOh0NVUTbdGc059IZcuV5KYJT64RHHy0qvN8YeXjbFUtvQvpDpaTKAkIkoJZRzOoV/vvjzK16UfOI1JHNYBEOrLEouq1KbEWCLepTiMjUidvOLyZetydEAzbIJBRCUi4jIZfcnPG79joUdSK1aWUZk0hUcZu9UVIgT2rDw084RcnVL1cQ+N/4YiXRytvUULE0C8p4LWAisD3IAkBC0Wn9pDLqwPJsJn0sl6uWqjiLddrNWRZq91Yf/3LLYJruzCHKTpZE1vckZT/AKIQzBRcTRcYj5QsPJFkehDIMySxwliHFs5u6CkgPJpZOnZZDKVCLEOIfuyFW/z6yRGekxIZUwMhCX+5F4eX8MZiTI1W0TbmASEpZTSyuXo5EgotGmEmXmF2InFqxliXP0rzQ2hTThpiXrmkrQaRetvUSILTplNcyXmISLFlmX7F4V5KxSaO0aRNM1EHCRC4tZq/lKJdesWkuxIQiaCSiRYiFzppkraU3bqXRtGBrbpEzaiiwxFuJznFyI3NyQyZZ5hspmJr8rZdwjfzrt/FB0mQQTAcFCEybrBxzCLKSp2fpiaWZgE1KgRP3SHyjlLahJiWJ0iiAbLLLC5q4miQjjl9NdkWYC02qSu4fNj4Q/VEerVAeRD1dXLLeVOSJDBeQCcOEibqyl9lOTsiLQ6aJbMpWYnAg+sRfCntjQ6M0uk5SdQG+lLHxWMqZTBEURTXi4fFf3iZbOLapmHdxe6kZU0LUqjbypqGNRWo8W73c8SUjHWHSJgV2McuEtWEsexE/aNTZLUJgKuBzXEIkJN7YtLyQqXPpPSFD0jlIohSSFHY5DgBZ4UX0oig+YCElF2QIclUjj5uFy8rwpNZWBqQ4UjiJDhSEkZj6oN6xTWzTRSiJNW8OoWMe4qIqd6QfpK0BKlEpEwb/d2LHntttyCRKim0iwub70REh9/ARPZ7La3fSQjEtoDvCPP01vFfCKGfLUxqrRbvGfFzol/csRTtK5QSWBiXVxO6VFaUgkprhooApA0sHlBl99cMb+WWSS0gLVqAimA/VKXq+nniWTLx8j/zSx7N1Ick8ZQGr0QiLEQumk3eSvOsQy58rFRG8Qk5uHnXl7IKMyVAEnnR5ZMvm+GjeWGAog1KGU0iFzs2H9omlT0MXYRlBvF5MXZqondDfrwAU0hxCEsnYfOkSi2vCkMgMNCU2SUxDzHjERF+3CtYIsEwdXPoLyAiEyLyhTCoRFVSyouy6ArFpLVA1RqBCMsiEeNCbRe0kWCLFajlGSVRHuB33g1w3c8USEZLLsiTZxFnHCQgQ4ZYl1i7NkNMUOYQkWIzc4R1ZYeTZQuyl0WEy1EQgIrLw5gIR8ndtReeKuXaiOc0iJCE2kJZZhDzcy0gmCj0UoCJCiE4iBpEOUv0922Hy7PMGXKV2KWWKVu9UqVv/wB0MG0MmFeIDlF32hYnovCmy+O2aYx4TjQ2lgFu6KcVNiftGwDIVQQMVUsTSFwtx9ibLr+jFDZFqACFRlkAGWIil+cLnTb39ECyLWByxEUfhaLpZOl34svP4QUcwxEloYCLcREPkyrycgxgBFpETuTMLcIzCli0sW9AZSBkOHHiaQk7WC7Lt2xDaGG8xHWELSzYpgYnLtovMqQMFvQcTSARImiTmzQLkw8sTpDyFUfepo4Ca4Rw9ioV8JFVtVcIFlIC1g8N7ortL2sTliQjizCQFrBmB0co9KLDbPpHyY34srfvBFOXkrE8Dl5ZgQhqq4S/w/hDrNaVA6UJZXCJakZnStEr7Yrgtv1kKEOFw4S4R5ajEh2sMoJiy4XNl9Krs9sDcvJmuywzcWW3SzEWkirwi6YX7waiVjCaNlWgpgtFTEf6mAe2sbiziqAiEqKXLTZ3R18f+Xw5qnqTwoUdi/UmchqwoUJy+BRFHYUKOH6OVX0n/scyPOD3vQjkKG+luIWjMpejElhyzPnlGFChKKIH0tl9QffAgZx9aFChl4B+hNs/sgfPFCHzFu9T3x2FDT4BlsP9g/xA94wrV56X6Ie8YUKKIQMmf2s/nkGAf/0F/ffAYUKCYODIfo/CB9LZLJ6JfpjkKCxfpZ6Fyj60TaSzf4ge4o5CjGBLFm/F/mhk/wAxM+eWFChKGkpZXmw9Iv8ANEMnL65QoUT+lAvRmYPRL3jF3Yc831f8sKFAoKNnYfNS/RH3QZChR28XhyX6dhQoUVEP/9k=" alt="" />
                                                    </figure>
                                                </div>
                                                <div class="col-md-4">
                                                    <figure>
                                                        <img class="img-fluid" src="https://preview.redd.it/9fpbqc9u7pt51.jpg?auto=webp&s=d89fead120e9e66532e3cfec4cabae256dcc184c" alt="" />
                                                    </figure>
                                                </div>
                                                <div class="col-md-4">
                                                    <figure>
                                                        <img class="img-fluid" src="https://i.pinimg.com/236x/b3/f5/52/b3f552d3b9486a9858a47ea337d8b762.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div class="col-md-4">
                                                    <figure>
                                                        <img class="img-fluid" src="https://i.redd.it/oees6w2rct771.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div class="col-md-4">
                                                    <figure>
                                                        <img class="img-fluid" src="https://i.pinimg.com/236x/95/4b/01/954b013de016811dd28d38e04d99baa3.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div class="col-md-4">
                                                    <figure class="mb-0">
                                                        <img class="img-fluid" src="https://i.imgflip.com/5y3xe0.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div class="col-md-4">
                                                    <figure class="mb-0">
                                                        <img class="img-fluid" src="https://i.pinimg.com/236x/35/fd/75/35fd751a377b22cca1989b568f772e76.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div class="col-md-4">
                                                    <figure class="mb-0">
                                                        <img class="img-fluid" src="https://media.pcgamesinsider.biz/2017/10/83064/gtav-r225x.jpg" alt=""/>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 grid-margin">
                                <div class="card rounded">
                                    <div class="card-body">
                                        <h6 class="card-title">Add Friends</h6>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://ih1.redbubble.net/image.3127220813.8407/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" />
                                                <div class="ml-2">
                                                    <p>‎ ‎ James</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="" />
                                                <div class="ml-2">
                                                    <p>‎ ‎ Peter</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="data:image/jpeg;base64,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" alt="" />
                                                <div class="ml-2">
                                                    <p>‎ ‎ Ryno</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://64.media.tumblr.com/edb3c2dc847bbd3b8bd66e7839110ef2/13740f703a4d97aa-c1/s1280x1920/6f38f6923a7096dbe23faed089c218e2b6aeefc2.png" alt="" />
                                                <div class="ml-2">
                                                    <p>‎ ‎ Ahmed</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://i.pinimg.com/originals/13/8d/52/138d52a8f429510e2c16bd67990dae3c.jpg" alt="" />
                                                <div class="ml-2">
                                                    <p>‎ ‎ Thomas</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbnGHJqGah595NBfezn63nSpjXgBbn4Lk1B59gNGsZXUzPd_chf94zJYplpdXMX2QKBs&usqp=CAU" alt="" />
                                                <div class="ml-2">
                                                    <p>‎ ‎ Emily</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div class="d-flex align-items-center hover-pointer">
                                                <img class="img-xs rounded-circle" src="https://www.artmajeur.com/medias/standard/d/e/delphinepages-pro/artwork/13292435_jupiter.jpg" alt="" />
                                                <div class="ml-2">
                                                    <p>‎ ‎ Wanning</p>
                                                </div>
                                            </div>
                                            <button class="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
            </div>
          </div> 
             
       
     
      
)
};
}
export default Home;