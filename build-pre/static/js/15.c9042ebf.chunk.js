(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1746:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});a(113);var n,i=a(43),l=a(17),s=a(18),r=a(21),o=a(19),c=a(20),u=(a(248),a(126)),d=a(0),p=a.n(d),f=a(75),b=a(56),m=a(321),h=Object(b.a)({path:"/users/_/edit/:id",ajax:!0})(n=u.a.create()(n=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!1,data:{},isEdit:!1},a.fetchData=function(){if(!a.state.loading){var e=a.props.id;a.setState({loading:!0}),a.props.ajax.get("/mock/users/".concat(e)).then(function(e){a.setState({data:e||{}})}).finally(function(){return a.setState({loading:!1})})}},a.handleSubmit=function(){a.state.loading||a.props.form.validateFieldsAndScroll(function(e,t){if(!e){var n=a.state.isEdit,i=n?a.props.ajax.put:a.props.ajax.post,l=n?"\u4fee\u6539\u6210\u529f\uff01":"\u6dfb\u52a0\u6210\u529f\uff01";a.setState({loading:!0}),i("/mock/users",t,{successTip:l}).then(function(){var e=a.props.onOk;e&&e()}).finally(function(){return a.setState({loading:!1})})}})},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=":id"!==this.props.match.params.id;this.setState({isEdit:e}),e&&this.fetchData()}},{key:"render",value:function(){var e=this.props.form,t=this.state,a=t.loading,n=t.data,l=t.isEdit,s={labelWidth:100,form:e,width:"50%"};return p.a.createElement(m.a,{loading:a},p.a.createElement(u.a,{onSubmit:this.handleSubmit},l?p.a.createElement(f.e,Object.assign({},s,{type:"hidden",field:"id",initialValue:n.id})):null,p.a.createElement(f.f,null,p.a.createElement(f.e,Object.assign({},s,{label:"\u7528\u6237\u540d",field:"name",initialValue:n.name,required:!0})),p.a.createElement(f.e,Object.assign({},s,{type:"number",label:"\u5e74\u9f84",field:"age",initialValue:n.age,required:!0})),p.a.createElement(f.e,Object.assign({},s,{type:"select",label:"\u5de5\u4f5c",field:"job",initialValue:n.job,options:[{value:"1",label:"\u524d\u7aef\u5f00\u53d1"},{value:"2",label:"\u540e\u7aef\u5f00\u53d1"}]})),p.a.createElement(f.e,Object.assign({},s,{type:"select",label:"\u804c\u4f4d",field:"position",initialValue:n.position,options:[{value:"1",label:"\u5458\u5de5"},{value:"2",label:"CEO"}]}))),p.a.createElement(f.f,null,p.a.createElement(f.e,Object.assign({},s,{layout:!0}),p.a.createElement(i.a,{type:"primary",onClick:this.handleSubmit},"\u4fdd\u5b58"),p.a.createElement(i.a,{onClick:function(){return e.resetFields()}},"\u91cd\u7f6e")))))}}]),t}(d.Component))||n)||n}}]);
//# sourceMappingURL=15.c9042ebf.chunk.js.map