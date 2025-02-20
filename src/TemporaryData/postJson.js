const postData = [
    {
        id: 1,
        type: 'image',
        author: 'John Doe',
        postTime: new Date('2023-04-01T10:00:00Z'),
        content: [
            {
                imgSrc: "./src/assets/images/post/post-2.jpg",
                alt: "post image 1"
            },
            {
                imgSrc: "./src/assets/images/post/post-3.jpg",
                alt: "post image 2"
            },
            {
                imgSrc: "./src/assets/images/post/post-3.jpg",
                alt: "post image 3"
            },
            {
                imgSrc: "./src/assets/images/post/post-3.jpg",
                alt: "post image 4"
            }
        ],
        description: "Check out these amazing photos from my recent trip!",
        likes: 201,
        comments: 41,
    },
    {
        id: 2,
        type: 'video',
        author: 'Jane Smith',
        postTime: new Date('2023-04-01T08:00:00Z'),
        content: [
            {
                videoSrc: "./src/assets/videos/12919604_3840_2160_60fps.mp4",
                title: "Amazing Video"
            }
        ],
        description: "Watch this amazing video I found!",
        likes: 150,
        comments: 30,
        shares: 5
    },
    {
        id: 3,
        type: 'carousel',
        author: 'Alice Johnson',
        postTime: new Date('2023-03-31T12:00:00Z'),
        content: [
            {
                imgSrc: "./src/assets/images/post/post-4.jpg",
                alt: "carousel image 1",
                title: "Image 1",
                description: "Description for image 1"
            },
            {
                imgSrc: "./src/assets/images/post/post-5.jpg",
                alt: "carousel image 2",
                title: "Image 2",
                description: "Description for image 2"
            },
            {
                imgSrc: "./src/assets/images/post/post-6.jpg",
                alt: "carousel image 3",
                title: "Image 3",
                description: "Description for image 3"
            }
        ],
        description: "Swipe through these beautiful images!",
        likes: 300,
        comments: 50,
        shares: 10
    },
    // {
    //     id: 4,
    //     type: 'text',
    //     author: 'Bob Brown',
    //     postTime: new Date('2023-03-30T15:00:00Z'),
    //     content: [
    //         {
    //             text: "Just finished reading an amazing book!"
    //         }
    //     ],
    //     description: "Book recommendations are welcome!",
    //     likes: 120,
    //     comments: 20,
    //     shares: 3
    // },
    // {
    //     id: 5,
    //     type: 'image',
    //     author: 'Charlie Davis',
    //     postTime: new Date('2023-03-29T18:00:00Z'),
    //     content: [
    //         {
    //             imgSrc: "./src/assets/images/post/post-7.jpg",
    //             alt: "post image 4"
    //         }
    //     ],
    //     description: "A beautiful sunset to end the day.",
    //     likes: 250,
    //     comments: 60,
    //     shares: 15
    // },
    // {
    //     id: 6,
    //     type: 'video',
    //     author: 'Diana Evans',
    //     postTime: new Date('2023-03-28T20:00:00Z'),
    //     content: [
    //         {
    //             videoSrc: "./src/assets/videos/demo-video-2.mp4",
    //             title: "Inspirational Speech"
    //         }
    //     ],
    //     description: "This speech changed my perspective!",
    //     likes: 180,
    //     comments: 45,
    //     shares: 8
    // },
    // {
    //     id: 7,
    //     type: 'carousel',
    //     author: 'Evan Foster',
    //     postTime: new Date('2023-03-27T22:00:00Z'),
    //     content: [
    //         {
    //             imgSrc: "./src/assets/images/post/post-8.jpg",
    //             alt: "carousel image 4",
    //             title: "Image 4",
    //             description: "Description for image 4"
    //         },
    //         {
    //             imgSrc: "./src/assets/images/post/post-9.jpg",
    //             alt: "carousel image 5",
    //             title: "Image 5",
    //             description: "Description for image 5"
    //         }
    //     ],
    //     description: "A collection of my favorite moments.",
    //     likes: 320,
    //     comments: 70,
    //     shares: 20
    // },
    // {
    //     id: 8,
    //     type: 'image',
    //     author: 'Fiona Green',
    //     postTime: new Date('2023-03-26T10:00:00Z'),
    //     content: [
    //         {
    //             imgSrc: "./src/assets/images/post/post-10.jpg",
    //             alt: "post image 5"
    //         }
    //     ],
    //     description: "Nature at its best.",
    //     likes: 400,
    //     comments: 80,
    //     shares: 25
    // },
    // {
    //     id: 9,
    //     type: 'video',
    //     author: 'George Harris',
    //     postTime: new Date('2023-03-25T12:00:00Z'),
    //     content: [
    //         {
    //             videoSrc: "./src/assets/videos/demo-video-3.mp4",
    //             title: "Fun Dance Video"
    //         }
    //     ],
    //     description: "Can't stop dancing to this tune!",
    //     likes: 500,
    //     comments: 100,
    //     shares: 30
    // },
    // {
    //     id: 10,
    //     type: 'text',
    //     author: 'Hannah Irving',
    //     postTime: new Date('2023-03-24T14:00:00Z'),
    //     content: [
    //         {
    //             text: "Feeling grateful for all the support!"
    //         }
    //     ],
    //     description: "Thank you everyone!",
    //     likes: 600,
    //     comments: 150,
    //     shares: 40
    // },
    // {
    //     id: 11,
    //     type: 'image',
    //     author: 'Ian Jackson',
    //     postTime: new Date('2023-03-23T16:00:00Z'),
    //     content: [
    //         {
    //             imgSrc: "./src/assets/images/post/post-11.jpg",
    //             alt: "post image 6"
    //         }
    //     ],
    //     description: "A glimpse of my art collection.",
    //     likes: 700,
    //     comments: 200,
    //     shares: 50
    // },
    // {
    //     id: 12,
    //     type: 'video',
    //     author: 'Jackie King',
    //     postTime: new Date('2023-03-22T18:00:00Z'),
    //     content: [
    //         {
    //             videoSrc: "./src/assets/videos/demo-video-4.mp4",
    //             title: "Funny Cat Video"
    //         }
    //     ],
    //     description: "This cat never fails to make me laugh!",
    //     likes: 800,
    //     comments: 250,
    //     shares: 60
    // },
    // {
    //     id: 13,
    //     type: 'carousel',
    //     author: 'Karen Lewis',
    //     postTime: new Date('2023-03-21T20:00:00Z'),
    //     content: [
    //         {
    //             imgSrc: "./src/assets/images/post/post-12.jpg",
    //             alt: "carousel image 6",
    //             title: "Image 6",
    //             description: "Description for image 6"
    //         },
    //         {
    //             imgSrc: "./src/assets/images/post/post-13.jpg",
    //             alt: "carousel image 7",
    //             title: "Image 7",
    //             description: "Description for image 7"
    //         }
    //     ],
    //     description: "Exploring new places!",
    //     likes: 900,
    //     comments: 300,
    //     shares: 70
    // },
    // {
    //     id: 14,
    //     type: 'image',
    //     author: 'Liam Miller',
    //     postTime: new Date('2023-03-20T22:00:00Z'),
    //     content: [
    //         {
    //             imgSrc: "./src/assets/images/post/post-14.jpg",
    //             alt: "post image 7"
    //         }
    //     ],
    //     description: "Throwback to a wonderful day.",
    //     likes: 1000,
    //     comments: 350,
    //     shares: 80
    // },
    // {
    //     id: 15,
    //     type: 'video',
    //     author: 'Mia Nelson',
    //     postTime: new Date('2023-03-19T10:00:00Z'),
    //     content: [
    //         {
    //             videoSrc: "./src/assets/videos/demo-video-5.mp4",
    //             title: "Beautiful Music Video"
    //         }
    //     ],
    //     description: "This song is on repeat!",
    //     likes: 1100,
    //     comments: 400,
    //     shares: 90
    // }
];

const calculateTimeAgo = (postTime) => {
    const now = new Date();
    const diff = now - postTime;
    const diffInMinutes = Math.floor(diff / 60000);
    const diffInHours = Math.floor(diff / 3600000);
    const diffInDays = Math.floor(diff / 86400000);

    if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
        return `${diffInHours} hours ago`;
    } else {
        return `${diffInDays} days ago`;
    }
};

postData.forEach(post => {
    post.timeAgo = calculateTimeAgo(post.postTime);
});

export default postData;
