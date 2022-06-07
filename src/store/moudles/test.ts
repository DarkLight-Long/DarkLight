const test = {
  state: {
    name: '张三',
    sex: '男'
  },
  mutations: {
    update (state:any, name: string):void {
      state.name = name
    }
  },
  action: {
    setName ({ commit } : any, name: string):void {
      commit.update(name)
    }
  },
  getters: {
    getName (state: any):string {
      return state.name
    }
  }
}
export default test
