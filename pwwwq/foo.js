const youtuber = {
        list: {
                business: {
                        youtuber: [
                                { name: "しまぶー", age: 20, teachProguramming() { } },
                                { name: "虎ハック", age: 37, teachHistory() }
                        ],
                        teach() { }
                },
                entertainment: {
                        youtuber: [{ name: "ヒカキン" }, { name: "ナオキマンショー" }],
                        makeSmile() { }

                }
        },
        plan() { },
        uploadVideo() { }
};




youtuber.list.business.youtuber[0].teachProguramming();
youtuber.plan();

export default youtuber;