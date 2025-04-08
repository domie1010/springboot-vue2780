const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm0669t/",
            name: "ssm0669t",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm0669t/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "汇美食电子商城"
        } 
    }
}
export default base
