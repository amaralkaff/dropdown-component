import{r as re,j as e}from"./index-B_YavJp2.js";import{r}from"./index-C2WPW1L7.js";import"./index-DX7rA-C0.js";const oe=({children:n,containerId:d="portal-root",containerStyle:a={}})=>{const[L,j]=r.useState(!1);return r.useEffect(()=>{j(!0);let o=document.getElementById(d);return o?Object.assign(o.style,a):(o=document.createElement("div"),o.id=d,Object.assign(o.style,a),document.body.appendChild(o)),()=>{const s=document.getElementById(d);s&&s.childNodes.length===0&&document.body.removeChild(s)}},[d,a]),L?re.createPortal(n,document.getElementById(d)||document.body):null},se=[{value:"1",label:"Option 1"},{value:"2",label:"Option with icon"},{value:"3",label:"Long Long Option 3"},{value:"4",label:"Long Long Long Option 4"},{value:"5",label:"Long Long Long Long Option 5"},{value:"6",label:"Long Long Long Long Long Option 6"}],K=({options:n=se,placeholder:d="Select option",onChange:a,searchable:L=!1,searchPlaceholder:j="Search...",usePortal:o=!1,multiple:s=!1,selectedValues:Q=[],renderOption:h,features:U={search:!0,portal:!0,multiple:!0,customRendering:!0},zIndex:R={dropdown:1001,portal:1100}})=>{const[g,C]=r.useState(!1),[i,z]=r.useState(null),[c,q]=r.useState(()=>n.filter(t=>Q.includes(t.value))),[p,S]=r.useState(""),[O,ee]=r.useState({top:0,left:0,width:0}),N=r.useRef(null),m=r.useCallback(()=>{if(N.current){const t=N.current.getBoundingClientRect();ee({top:t.bottom+window.scrollY,left:t.left+window.scrollX,width:t.width})}},[]);r.useEffect(()=>{if(g&&o)return m(),window.addEventListener("scroll",m),window.addEventListener("resize",m),()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",m)}},[g,o,m]);const T=t=>{if(s){const u=c.some(k=>k.value===t.value)?c.filter(k=>k.value!==t.value):[...c,t];q(u),a==null||a(u)}else z(t),C(!1),a==null||a(t);S("")},E=t=>{t.stopPropagation(),s?(q([]),a==null||a([])):(z(null),a==null||a(null))},te=()=>h&&i?h({option:i,isSelected:!0,multiple:!1}):s?c.length===0?d:e.jsx("div",{className:"flex flex-wrap gap-1",children:c.map(t=>e.jsxs("div",{onClick:l=>{l.stopPropagation(),T(t)},className:"inline-flex items-center bg-gray-100 rounded-lg cursor-pointer",children:[e.jsx("span",{className:"px-2 py-0.5",children:t.label}),e.jsx("span",{className:"pr-1",children:"X"})]},t.value))}):i?e.jsx("div",{className:"flex items-center w-full",children:e.jsxs("div",{onClick:t=>{t.stopPropagation(),E(t)},className:"inline-flex items-center bg-gray-100 rounded-lg cursor-pointer",children:[e.jsx("span",{className:"px-2 py-0.5",children:i.label}),e.jsx("span",{className:"pr-1",children:"×"})]})}):d,P=r.useCallback(()=>{if(!p)return n;const t=p.toLowerCase();return n.filter(l=>{var u;return l.label.toLowerCase().includes(t)||((u=l.description)==null?void 0:u.toLowerCase().includes(t))})},[n,p]),ne=r.useCallback(t=>{S(t)},[]),ae=t=>{const l=t.target.value;ne(l)},le=()=>`absolute z-${R.dropdown} w-full bg-white border border-gray-200 rounded-md mt-1 overflow-hidden`,B=()=>e.jsxs("div",{className:`${le()} shadow-xl`,style:{...o?{top:O.top+4,left:O.left,width:O.width}:{}},children:[L&&e.jsx("div",{className:"p-2 border-b border-gray-100",children:e.jsxs("div",{className:"relative flex items-center h-10",children:[e.jsx("span",{className:"absolute left-3 text-gray-400",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx("input",{type:"text",value:p,onChange:ae,placeholder:j,className:`w-full h-10 pl-9 pr-8 text-sm bg-white border border-gray-200 rounded-md
                       focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500`,onClick:t=>t.stopPropagation()}),p&&e.jsx("button",{onClick:()=>S(""),className:"absolute right-3 text-gray-400 hover:text-gray-600",children:e.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]})}),e.jsxs("div",{className:"max-h-[280px] overflow-auto",children:[!p&&P().length===0&&e.jsx("div",{className:"px-3 py-2 text-sm text-gray-500 text-center",children:"Tidak ada hasil yang ditemukan"}),P().map(t=>{const l=s?c.some(u=>u.value===t.value):(i==null?void 0:i.value)===t.value;return h?h({option:t,isSelected:l,multiple:s}):e.jsxs("div",{className:`px-3 py-2.5 text-sm cursor-pointer flex items-center justify-between
                       ${l?"bg-cyan-50":"hover:bg-gray-50"}
                       ${l?"text-cyan-600":"text-gray-600"}`,onClick:()=>T(t),children:[e.jsx("span",{className:"block truncate pr-4",children:t.label}),l&&e.jsx("span",{className:"flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4 text-cyan-600",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]},t.value)})]})]});return e.jsxs("div",{className:"relative w-full",children:[e.jsxs("button",{ref:N,type:"button",onClick:()=>C(!g),className:`w-full h-10 px-3 text-left bg-white border border-gray-200 rounded-md text-sm
                 hover:border-gray-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500
                 flex items-center justify-between group`,children:[e.jsxs("div",{className:"flex items-center min-w-0 flex-1",children:[e.jsx("span",{className:`block truncate flex-1 ${!i&&c.length===0?"text-gray-400":"text-gray-700"}`,children:te()}),i&&e.jsx("button",{onClick:t=>{t.stopPropagation(),E(t)},className:"ml-2 flex-shrink-0 text-gray-400 hover:text-gray-600",children:e.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]}),e.jsx("span",{className:"flex-shrink-0 ml-2 text-gray-400",children:e.jsx("svg",{className:`h-4 w-4 transition-transform duration-200 ${g?"transform rotate-180":""}`,viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})})})]}),g&&(U.portal&&o?e.jsx(oe,{containerStyle:{zIndex:R.portal},children:B()}):B())]})};K.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:"",defaultValue:{value:`[
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option with icon' },
  { value: '3', label: 'Long Long Option 3' },
  { value: '4', label: 'Long Long Long Option 4' },
  { value: '5', label: 'Long Long Long Long Option 5' },
  { value: '6', label: 'Long Long Long Long Long Option 6' },
]`,computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select option'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: Option | Option[]) => void",signature:{arguments:[{type:{name:"union",raw:"Option | Option[]",elements:[{name:"Option"},{name:"Array",elements:[{name:"Option"}],raw:"Option[]"}]},name:"option"}],return:{name:"void"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search...'",computed:!1}},usePortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { option: Option; isSelected: boolean; multiple?: boolean }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ option: Option; isSelected: boolean; multiple?: boolean }",signature:{properties:[{key:"option",value:{name:"Option",required:!0}},{key:"isSelected",value:{name:"boolean",required:!0}},{key:"multiple",value:{name:"boolean",required:!1}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},features:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  search?: boolean;
  portal?: boolean;
  multiple?: boolean;
  customRendering?: boolean;
}`,signature:{properties:[{key:"search",value:{name:"boolean",required:!1}},{key:"portal",value:{name:"boolean",required:!1}},{key:"multiple",value:{name:"boolean",required:!1}},{key:"customRendering",value:{name:"boolean",required:!1}}]}},description:"",defaultValue:{value:`{
  search: true,
  portal: true,
  multiple: true,
  customRendering: true
}`,computed:!1}},zIndex:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  dropdown?: number;
  portal?: number;
}`,signature:{properties:[{key:"dropdown",value:{name:"number",required:!1}},{key:"portal",value:{name:"number",required:!1}}]}},description:"",defaultValue:{value:`{
  dropdown: 1001,
  portal: 1100
}`,computed:!1}}}};const ue={title:"Components/Dropdown",component:K,parameters:{layout:"centered"},tags:["autodocs"],decorators:[n=>e.jsx("div",{className:"w-full p-4 flex justify-center",children:e.jsx(n,{})})]},f=[{value:"1",label:"Option 1"},{value:"2",label:"Option with icon"},{value:"3",label:"Long Long Option 3"},{value:"4",label:"Long Long Long Option 4"},{value:"5",label:"Long Long Long Long Option 5"},{value:"6",label:"Long Long Long Long Long Option 6"}],x={args:{options:f,onChange:n=>console.log("Selected:",n),searchable:!0,searchPlaceholder:"Search..."}},v={args:{options:f,onChange:n=>console.log("Selected:",n),usePortal:!0,searchable:!0}},b={args:{options:f,onChange:n=>console.log("Selected:",n),multiple:!0,searchable:!0,placeholder:"Select multiple options"}},w={args:{options:f,onChange:n=>console.log("Selected:",n),features:{search:!0,portal:!1,multiple:!1,customRendering:!0},searchable:!0,placeholder:"Select with limited features"}},y={args:{options:f,onChange:n=>console.log("Selected:",n),usePortal:!0,zIndex:{dropdown:1001,portal:1100},placeholder:"Dropdown with custom z-index"},decorators:[n=>e.jsxs("div",{style:{position:"relative"},children:[e.jsx("div",{style:{position:"absolute",zIndex:1e3,padding:"20px",background:"#f0f0f0",border:"1px solid #ccc",borderRadius:"4px",marginBottom:"20px",width:"100%"},children:"Element with z-index 1000"}),e.jsx("div",{style:{position:"absolute",zIndex:1500,padding:"20px",background:"#e0e0e0",border:"1px solid #ccc",borderRadius:"4px",marginBottom:"20px",left:"50%",width:"50%"},children:"Element with z-index 1500"}),e.jsx("div",{style:{marginTop:"120px",width:"300px"},children:e.jsx(n,{})})]})]};var D,I,V;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options,
    onChange: value => console.log('Selected:', value),
    searchable: true,
    searchPlaceholder: 'Search...'
  }
}`,...(V=(I=x.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var W,M,$;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options,
    onChange: value => console.log('Selected:', value),
    usePortal: true,
    searchable: true
  }
}`,...($=(M=v.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var _,A,F;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options,
    onChange: value => console.log('Selected:', value),
    multiple: true,
    searchable: true,
    placeholder: 'Select multiple options'
  }
}`,...(F=(A=b.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var X,Z,Y;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    options,
    onChange: value => console.log('Selected:', value),
    features: {
      search: true,
      portal: false,
      multiple: false,
      customRendering: true
    },
    searchable: true,
    placeholder: 'Select with limited features'
  }
}`,...(Y=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var G,H,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options,
    onChange: value => console.log('Selected:', value),
    usePortal: true,
    zIndex: {
      dropdown: 1001,
      portal: 1100
    },
    placeholder: 'Dropdown with custom z-index'
  },
  decorators: [Story => <div style={{
    position: 'relative'
  }}>
        <div style={{
      position: 'absolute',
      zIndex: 1000,
      padding: '20px',
      background: '#f0f0f0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '20px',
      width: '100%'
    }}>
          Element with z-index 1000
        </div>
        <div style={{
      position: 'absolute',
      zIndex: 1500,
      padding: '20px',
      background: '#e0e0e0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '20px',
      left: '50%',
      width: '50%'
    }}>
          Element with z-index 1500
        </div>
        <div style={{
      marginTop: '120px',
      width: '300px'
    }}>
          <Story />
        </div>
      </div>]
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const pe=["WithSearch","WithPortal","Multiple","WithToggledFeatures","WithCustomZIndex"];export{b as Multiple,y as WithCustomZIndex,v as WithPortal,x as WithSearch,w as WithToggledFeatures,pe as __namedExportsOrder,ue as default};
