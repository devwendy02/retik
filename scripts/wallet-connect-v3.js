(()=>{var e,t,r,n,i,o=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,d=(i=function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')},typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):i),h=(e,t)=>()=>(e&&(t=e(e=0)),t),p=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),f=(e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})},g=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of c(t))!u.call(e,i)&&i!==r&&s(e,i,{get:()=>t[i],enumerable:!(n=a(t,i))||n.enumerable});return e},m=(e,t,r)=>(g(e,t,"default"),r&&g(r,t,"default")),b=(e,t,r)=>(r=null!=e?o(l(e)):{},g(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)),y=e=>g(s({},"__esModule",{value:!0}),e),v=h((()=>{e="1.10.12"})),w=h((()=>{v(),t=e=>e,r=e=>e,n=()=>"viem@"+e}));function _(e,t){return t?.(e)?e:e&&"object"==typeof e&&"cause"in e?_(e.cause,t):t?null:e}var x,E,A,P,S,O,C=h((()=>{w(),x=class e extends Error{constructor(t,r={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:n()});let i=r.cause instanceof e?r.cause.details:r.cause?.message?r.cause.message:r.details,o=r.cause instanceof e&&r.cause.docsPath||r.docsPath;this.message=[t||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...o?["Docs: https://viem.sh"+o+".html"+(r.docsSlug?"#"+r.docsSlug:"")]:[],...i?["Details: "+i]:[],"Version: "+this.version].join("\n"),r.cause&&(this.cause=r.cause),this.details=i,this.docsPath=o,this.metaMessages=r.metaMessages,this.shortMessage=t}walk(e){return _(this,e)}}})),I=h((()=>{C(),E=class extends x{constructor({blockNumber:e,chain:t,contract:r}){super('Chain "'+t.name+'" does not support contract "'+r.name+'".',{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?['- The contract "'+r.name+'" was not deployed until block '+r.blockCreated+" (current block "+e+")."]:['- The chain does not have the contract "'+r.name+'" configured.']]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}},A=class extends x{constructor({chain:e,currentChainId:t}){super("The current chain of the wallet (id: "+t+") does not match the target chain for the transaction (id: "+e.id+" – "+e.name+").",{metaMessages:["Current Chain ID:  "+t,"Expected Chain ID: "+e.id+" – "+e.name]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}},P=class extends x{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}},S=class extends x{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}},O=class extends x{constructor({chainId:e}){super('Chain ID "'+e+'" is invalid.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}}));function k({chain:e,currentChainId:t}){if(!e)throw new P;if(t!==e.id)throw new A({chain:e,currentChainId:t})}function T(e,t={}){let{fees:r=e.fees,formatters:n=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:r,formatters:n,serializers:i}}function M({blockNumber:e,chain:t,contract:r}){let n=t?.contracts?.[r];if(!n)throw new E({chain:t,contract:{name:r}});if(e&&n.blockCreated&&n.blockCreated>e)throw new E({blockNumber:e,chain:t,contract:{name:r,blockCreated:n.blockCreated}});return n.address}var j,R,N,L=h((()=>{I()})),B=h((()=>{C(),j=class extends x{constructor({max:e,min:t,signed:r,size:n,value:i}){super('Number "'+i+'" is not in safe '+(n?8*n+"-bit "+(r?"signed":"unsigned")+" ":"")+"integer range "+(e?"("+t+" to "+e+")":"(above "+t+")")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}},R=class extends x{constructor(e){super('Hex value "'+e+'" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}},N=class extends x{constructor({givenSize:e,maxSize:t}){super("Size cannot exceed "+t+" bytes. Given size: "+e+" bytes."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}}));function D(e,{strict:t=!0}={}){return!(!e||"string"!=typeof e)&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}var U=h((()=>{}));function F(e){return D(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}var z=h((()=>{U()}));function H(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,n=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)n++;return r="left"===t?r.slice(n):r.slice(0,r.length-n),"string"==typeof e?(1===r.length&&"right"===t&&(r+="0"),"0x"+(r.length%2==1?"0"+r:r)):r}var q,W,V=h((()=>{})),G=h((()=>{C(),q=class extends x{constructor({offset:e,position:t,size:r}){super("Slice "+("start"===t?"starting":"ending")+' at offset "'+e+'" is out-of-bounds (size: '+r+")."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}},W=class extends x{constructor({size:e,targetSize:t,type:r}){super(""+r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()+" size ("+e+") exceeds padding size ("+t+")."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}}));function $(e,{dir:t,size:r=32}={}){return"string"==typeof e?K(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new W({size:e.length,targetSize:r,type:"bytes"});let n=new Uint8Array(r);for(let i=0;i<r;i++){let o="right"===t;n[o?i:r-i-1]=e[o?i:e.length-i-1]}return n}(e,{dir:t,size:r})}function K(e,{dir:t,size:r=32}={}){if(null===r)return e;let n=e.replace("0x","");if(n.length>2*r)throw new W({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return"0x"+n["right"===t?"padEnd":"padStart"](2*r,"0")}var Z=h((()=>{G()}));function Q(e,t={}){return"number"==typeof e||"bigint"==typeof e?X(e,t):"string"==typeof e?ee(e,t):"boolean"==typeof e?J(e,t):Y(e,t)}function J(e,t={}){let r="0x"+Number(e);return"number"==typeof t.size?(le(r,{size:t.size}),$(r,{size:t.size})):r}function Y(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=te[e[t]];let n="0x"+r;return"number"==typeof t.size?(le(n,{size:t.size}),$(n,{dir:"right",size:t.size})):n}function X(e,t={}){let r,{signed:n,size:i}=t,o=BigInt(e);i?r=n?(0x1n<<0x8n*BigInt(i)-0x1n)-0x1n:0x2n**(0x8n*BigInt(i))-0x1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let s="bigint"==typeof r&&n?-r-0x1n:0;if(r&&o>r||o<s){let t="bigint"==typeof e?"n":"";throw new j({max:r?""+r+t:void 0,min:""+s+t,signed:n,size:i,value:""+e+t})}let a="0x"+(n&&o<0?(0x1n<<BigInt(8*i))+BigInt(o):o).toString(16);return i?$(a,{size:i}):a}function ee(e,t={}){return Y(re.encode(e),t)}var te,re,ne=h((()=>{B(),Z(),fe(),te=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0"))),re=new TextEncoder}));function ie(e,t={}){return"number"==typeof e||"bigint"==typeof e?oe(X(e,t)):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return r[0]=Number(e),"number"==typeof t.size?(le(r,{size:t.size}),$(r,{size:t.size})):r}(e,t):D(e)?oe(e,t):se(e,t)}function oe(e,t={}){let r=e;t.size&&(le(r,{size:t.size}),r=$(r,{dir:"right",size:t.size}));let n=r.slice(2);n.length%2&&(n="0"+n);let i=new Uint8Array(n.length/2);for(let e=0;e<i.length;e++){let t=2*e,r=n.slice(t,t+2),o=Number.parseInt(r,16);if(Number.isNaN(o)||o<0)throw new x('Invalid byte sequence ("'+r+'" in "'+n+'").');i[e]=o}return i}function se(e,t={}){let r=ae.encode(e);return"number"==typeof t.size?(le(r,{size:t.size}),$(r,{dir:"right",size:t.size})):r}var ae,ce=h((()=>{C(),U(),Z(),fe(),ne(),ae=new TextEncoder}));function le(e,{size:t}){if(F(e)>t)throw new N({givenSize:F(e),maxSize:t})}function ue(e,t={}){let{signed:r}=t;t.size&&le(e,{size:t.size});let n=BigInt(e);if(!r)return n;let i=(e.length-2)/2;return n<=(0x1n<<0x8n*BigInt(i)-0x1n)-0x1n?n:n-BigInt("0x"+"f".padStart(2*i,"f"))-0x1n}function de(e,t={}){let r=e;if(t.size&&(le(r,{size:t.size}),r=H(r)),"0x00"===H(r))return!1;if("0x01"===H(r))return!0;throw new R(r)}function he(e,t={}){return Number(ue(e,t))}function pe(e,t={}){let r=oe(e);return t.size&&(le(r,{size:t.size}),r=H(r,{dir:"right"})),(new TextDecoder).decode(r)}var fe=h((()=>{B(),z(),V(),ce()}));function ge(e,t){return({exclude:r,format:n})=>({exclude:r,format:e=>{let i=t(e);if(r)for(let e of r)delete i[e];return{...i,...n(e)}},type:e})}var me=h((()=>{}));function be(e){return{...e,gas:typeof e.gas<"u"?X(e.gas):void 0,gasPrice:typeof e.gasPrice<"u"?X(e.gasPrice):void 0,maxFeePerGas:typeof e.maxFeePerGas<"u"?X(e.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof e.maxPriorityFeePerGas<"u"?X(e.maxPriorityFeePerGas):void 0,nonce:typeof e.nonce<"u"?X(e.nonce):void 0,type:typeof e.type<"u"?ye[e.type]:void 0,value:typeof e.value<"u"?X(e.value):void 0}}var ye,ve,we,_e,xe,Ee,Ae=h((()=>{ne(),me(),ye={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"},ve=ge("transactionRequest",be)})),Pe=h((()=>{C(),we=class extends x{constructor({address:e}){super('Address "'+e+'" is invalid.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}})),Se=h((()=>{_e={gwei:9,wei:18},xe={ether:-9,wei:9},Ee={ether:-18,gwei:-9}}));function Oe(e,t){let r=e.toString(),n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(t,"0");let[i,o]=[r.slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),(n?"-":"")+(i||"0")+(o?"."+o:"")}var Ce=h((()=>{}));function Ie(e,t="wei"){return Oe(e,xe[t])}var ke,Te,Me,je,Re,Ne,Le,Be,De,Ue,Fe,ze,He=h((()=>{Se(),Ce()})),qe=h((()=>{He(),C(),ke=class extends x{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super("Execution reverted "+(r?"with reason: "+r:"for an unknown reason")+".",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}},Object.defineProperty(ke,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(ke,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/}),Te=class extends x{constructor({cause:e,maxFeePerGas:t}={}){super("The fee cap (`maxFeePerGas`"+(t?" = "+Ie(t)+" gwei":"")+") cannot be higher than the maximum allowed value (2^256-1).",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}},Object.defineProperty(Te,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/}),Me=class extends x{constructor({cause:e,maxFeePerGas:t}={}){super("The fee cap (`maxFeePerGas`"+(t?" = "+Ie(t):"")+" gwei) cannot be lower than the block base fee.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}},Object.defineProperty(Me,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/}),je=class extends x{constructor({cause:e,nonce:t}={}){super("Nonce provided for the transaction "+(t?"("+t+") ":"")+"is higher than the next one expected.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}},Object.defineProperty(je,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/}),Re=class extends x{constructor({cause:e,nonce:t}={}){super(["Nonce provided for the transaction "+(t?"("+t+") ":"")+"is lower than the current nonce of the account.","Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}},Object.defineProperty(Re,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/}),Ne=class extends x{constructor({cause:e,nonce:t}={}){super("Nonce provided for the transaction "+(t?"("+t+") ":"")+"exceeds the maximum allowed nonce.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}},Object.defineProperty(Ne,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/}),Le=class extends x{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}},Object.defineProperty(Le,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/}),Be=class extends x{constructor({cause:e,gas:t}={}){super("The amount of gas "+(t?"("+t+") ":"")+"provided for the transaction exceeds the limit allowed for the block.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}},Object.defineProperty(Be,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/}),De=class extends x{constructor({cause:e,gas:t}={}){super("The amount of gas "+(t?"("+t+") ":"")+"provided for the transaction is too low.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}},Object.defineProperty(De,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/}),Ue=class extends x{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}},Object.defineProperty(Ue,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/}),Fe=class extends x{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(["The provided tip (`maxPriorityFeePerGas`"+(t?" = "+Ie(t)+" gwei":"")+") cannot be higher than the fee cap (`maxFeePerGas`"+(r?" = "+Ie(r)+" gwei":"")+")."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}},Object.defineProperty(Fe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/}),ze=class extends x{constructor({cause:e}){super("An error occurred while executing: "+e?.shortMessage,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}}));function We(e){return Ve.test(e)}var Ve,Ge=h((()=>{Ve=/^0x[a-fA-F0-9]{40}$/}));function $e(e){return"string"==typeof e[0]?Ke(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),n=0;for(let t of e)r.set(t,n),n+=t.length;return r}(e)}function Ke(e){return"0x"+e.reduce(((e,t)=>e+t.replace("0x","")),"")}var Ze=h((()=>{}));function Qe(e,t="wei"){return Oe(e,_e[t])}var Je=h((()=>{Se(),Ce()}));function Ye(e){let t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),r=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>"  "+(e+":").padEnd(r+1)+"  "+t)).join("\n")}var Xe,et,tt,rt,nt,it,ot,st,at=h((()=>{Je(),He(),C(),Xe=class extends x{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}},et=class extends x{constructor({v:e}){super('Invalid `v` value "'+e+'". Expected 27 or 28.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}},tt=class extends x{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Ye(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}},rt=class extends x{constructor({storageKey:e}){super('Size for storage key "'+e+'" is invalid. Expected 32 bytes. Got '+Math.floor((e.length-2)/2)+" bytes."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}},nt=class extends x{constructor(e,{account:t,docsPath:r,chain:n,data:i,gas:o,gasPrice:s,maxFeePerGas:a,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){let h=Ye({chain:n&&n?.name+" (id: "+n?.id+")",from:t?.address,to:u,value:typeof d<"u"&&Qe(d)+" "+(n?.nativeCurrency.symbol||"ETH"),data:i,gas:o,gasPrice:typeof s<"u"&&Ie(s)+" gwei",maxFeePerGas:typeof a<"u"&&Ie(a)+" gwei",maxPriorityFeePerGas:typeof c<"u"&&Ie(c)+" gwei",nonce:l});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}},it=class extends x{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:n,index:i}){let o="Transaction";r&&void 0!==i&&(o='Transaction at block time "'+r+'" at index "'+i+'"'),e&&void 0!==i&&(o='Transaction at block hash "'+e+'" at index "'+i+'"'),t&&void 0!==i&&(o='Transaction at block number "'+t+'" at index "'+i+'"'),n&&(o='Transaction with hash "'+n+'"'),super(o+" could not be found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}},ot=class extends x{constructor({hash:e}){super('Transaction receipt with hash "'+e+'" could not be found. The Transaction may not be processed on a block yet.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}},st=class extends x{constructor({hash:e}){super('Timed out while waiting for transaction with hash "'+e+'" to be confirmed.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}})),ct=p(((e,t)=>{"use strict";var r=Object.prototype.hasOwnProperty,n="~";function i(){}function o(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function s(e,t,r,i,s){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new o(r,i||e,s),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function c(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(n=!1)),c.prototype.eventNames=function(){var e,t,i=[];if(0===this._eventsCount)return i;for(t in e=this._events)r.call(e,t)&&i.push(n?t.slice(1):t);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},c.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,o=r.length,s=new Array(o);i<o;i++)s[i]=r[i].fn;return s},c.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},c.prototype.emit=function(e,t,r,i,o,s){var a=n?n+e:e;if(!this._events[a])return!1;var c,l,u=this._events[a],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,i),!0;case 5:return u.fn.call(u.context,t,r,i,o),!0;case 6:return u.fn.call(u.context,t,r,i,o,s),!0}for(l=1,c=new Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var h,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,r);break;case 4:u[l].fn.call(u[l].context,t,r,i);break;default:if(!c)for(h=1,c=new Array(d-1);h<d;h++)c[h-1]=arguments[h];u[l].fn.apply(u[l].context,c)}}return!0},c.prototype.on=function(e,t,r){return s(this,e,t,r,!1)},c.prototype.once=function(e,t,r){return s(this,e,t,r,!0)},c.prototype.removeListener=function(e,t,r,i){var o=n?n+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn===t&&(!i||s.once)&&(!r||s.context===r)&&a(this,o);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||i&&!s[c].once||r&&s[c].context!==r)&&l.push(s[c]);l.length?this._events[o]=1===l.length?l[0]:l:a(this,o)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,typeof t<"u"&&(t.exports=c)}));function lt(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new kt(e.type);return e.name+"("+ut(e.inputs,{includeName:t})+")"}function ut(e,{includeName:t=!1}={}){return e?e.map((e=>function(e,{includeName:t}){return e.type.startsWith("tuple")?"("+ut(e.components,{includeName:t})+")"+e.type.slice(5):e.type+(t&&e.name?" "+e.name:"")}(e,{includeName:t}))).join(t?", ":","):""}var dt,ht,pt,ft,gt,mt,bt,yt,vt,wt,_t,xt,Et,At,Pt,St,Ot,Ct,It,kt,Tt=h((()=>{Mt()})),Mt=h((()=>{Tt(),z(),C(),dt=class extends x{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}},ht=class extends x{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}},pt=class extends x{constructor({data:e,params:t,size:r}){super(["Data size of "+r+" bytes is too small for given parameters."].join("\n"),{metaMessages:["Params: ("+ut(t,{includeName:!0})+")","Data:   "+e+" ("+r+" bytes)"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}},ft=class extends x{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}},gt=class extends x{constructor({expectedLength:e,givenLength:t,type:r}){super(["ABI encoding array length mismatch for type "+r+".","Expected length: "+e,"Given length: "+t].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}},mt=class extends x{constructor({expectedSize:e,value:t}){super('Size of bytes "'+t+'" (bytes'+F(t)+") does not match expected size (bytes"+e+")."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}},bt=class extends x{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.","Expected length (params): "+e,"Given length (values): "+t].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}},yt=class extends x{constructor(e,{docsPath:t}){super(['Encoded error signature "'+e+'" not found on ABI.',"Make sure you are using the correct ABI and that the error exists on it.","You can look up the decoded signature here: https://openchain.xyz/signatures?query="+e+"."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}},vt=class extends x{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}},wt=class extends x{constructor(e,{docsPath:t}){super(['Encoded event signature "'+e+'" not found on ABI.',"Make sure you are using the correct ABI and that the event exists on it.","You can look up the signature here: https://openchain.xyz/signatures?query="+e+"."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}},_t=class extends x{constructor(e,{docsPath:t}={}){super(["Event "+(e?'"'+e+'" ':"")+"not found on ABI.","Make sure you are using the correct ABI and that the event exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}},xt=class extends x{constructor(e,{docsPath:t}={}){super(["Function "+(e?'"'+e+'" ':"")+"not found on ABI.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}},Et=class extends x{constructor(e,{docsPath:t}){super(['Function "'+e+'" does not contain any `outputs` on ABI.',"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}},At=class extends x{constructor({expectedSize:e,givenSize:t}){super("Expected bytes"+e+", got bytes"+t+"."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}},Pt=class extends x{constructor({abiItem:e,data:t,params:r,size:n}){super(["Data size of "+n+" bytes is too small for non-indexed event parameters."].join("\n"),{metaMessages:["Params: ("+ut(r,{includeName:!0})+")","Data:   "+t+" ("+n+" bytes)"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=n}},St=class extends x{constructor({abiItem:e,param:t}){super(["Expected a topic for indexed event parameter"+(t.name?' "'+t.name+'"':"")+' on event "'+lt(e,{includeName:!0})+'".'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}},Ot=class extends x{constructor(e,{docsPath:t}){super(['Type "'+e+'" is not a valid encoding type.',"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}},Ct=class extends x{constructor(e,{docsPath:t}){super(['Type "'+e+'" is not a valid decoding type.',"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}},It=class extends x{constructor(e){super(['Value "'+e+'" is not a valid array.'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}},kt=class extends x{constructor(e){super(['"'+e+'" is not a valid definition type.','Valid types: "function", "event", "error"'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}}));function jt(e){let t=e.match(Rt),r=t?.[2]||void 0,n=t?.[3];return{type:r,name:n,params:t?.[5]||void 0}}var Rt,Nt=h((()=>{Rt=/((function|event)\s)?(.*)(\((.*)\))/}));function Lt(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("Wrong positive integer: "+e)}function Bt(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error("Expected Uint8Array of length "+t+", not of length="+e.length)}function Dt(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}var Ut=h((()=>{}));function Ft(e,t=!1){return t?{h:Number(e&zt),l:Number(e>>Ht&zt)}:{h:0|Number(e>>Ht&zt),l:0|Number(e&zt)}}var zt,Ht,qt,Wt,Vt,Gt,$t=h((()=>{zt=BigInt(4294967295),Ht=BigInt(32),qt=(e,t,r)=>e<<r|t>>>32-r,Wt=(e,t,r)=>t<<r|e>>>32-r,Vt=(e,t,r)=>t<<r-32|e>>>64-r,Gt=(e,t,r)=>e<<r-32|t>>>64-r}));function Kt(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),!Zt(e))throw new Error("expected Uint8Array, got "+typeof e);return e}var Zt,Qt,Jt,Yt=h((()=>{if(Zt=e=>e instanceof Uint8Array,Qt=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");Jt=class{clone(){return this._cloneInto()}},{}.toString}));var Xt,er,tr,rr,nr,ir,or,sr,ar,cr,lr,ur,dr,hr,pr,fr,gr,mr=h((()=>{Ut(),$t(),Yt(),[Xt,er,tr]=[[],[],[]],rr=BigInt(0),nr=BigInt(1),ir=BigInt(2),or=BigInt(7),sr=BigInt(256),ar=BigInt(113);for(let e=0,t=nr,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],Xt.push(2*(5*n+r)),er.push((e+1)*(e+2)/2%64);let i=rr;for(let e=0;e<7;e++)t=(t<<nr^(t>>or)*ar)%sr,t&ir&&(i^=nr<<(nr<<BigInt(e))-nr);tr.push(i)}[cr,lr]=function(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:o,l:s}=Ft(e[i],t);[r[i],n[i]]=[o,s]}return[r,n]}(tr,!0),ur=(e,t,r)=>r>32?Vt(e,t,r):qt(e,t,r),dr=(e,t,r)=>r>32?Gt(e,t,r):Wt(e,t,r),hr=class e extends Jt{constructor(e,t,r,n=!1,i=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=n,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Lt(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Qt(this.state)}keccak(){(function(e,t=24){let r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let n=(t+8)%10,i=(t+2)%10,o=r[i],s=r[i+1],a=ur(o,s,1)^r[n],c=dr(o,s,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=a,e[t+r+1]^=c}let t=e[2],i=e[3];for(let r=0;r<24;r++){let n=er[r],o=ur(t,i,n),s=dr(t,i,n),a=Xt[r];t=e[a],i=e[a+1],e[a]=o,e[a+1]=s}for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}e[0]^=cr[n],e[1]^=lr[n]}r.fill(0)})(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Dt(this);let{blockLen:t,state:r}=this,n=(e=Kt(e)).length;for(let i=0;i<n;){let o=Math.min(t-this.pos,n-i);for(let t=0;t<o;t++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:n}=this;e[r]^=t,128&t&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){Dt(this,!1),Bt(e),this.finish();let t=this.state,{blockLen:r}=this;for(let n=0,i=e.length;n<i;){this.posOut>=r&&this.keccak();let o=Math.min(r-this.posOut,i-n);e.set(t.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Lt(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(function(e,t){Bt(e);let r=t.outputLen;if(e.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:r,suffix:n,outputLen:i,rounds:o,enableXOF:s}=this;return t||(t=new e(r,n,i,s,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=n,t.outputLen=i,t.enableXOF=s,t.destroyed=this.destroyed,t}},(pr=(e,t,r)=>function(e){let t=t=>e().update(Kt(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}((()=>new hr(t,e,r))))(6,144,28),pr(6,136,32),pr(6,104,48),pr(6,72,64),pr(1,144,28),fr=pr(1,136,32),pr(1,104,48),pr(1,72,64),(gr=(e,t,r)=>function(e){let t=(t,r)=>e(r).update(Kt(t)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=t=>e(t),t}(((n={})=>new hr(t,e,void 0===n.dkLen?r:n.dkLen,!0))))(31,168,16),gr(31,136,32)}));function br(e,t){let r=t||"hex",n=fr(D(e,{strict:!1})?ie(e):e);return"bytes"===r?n:Q(n)}var yr=h((()=>{mr(),U(),ce(),ne()}));function vr(e){let t=jt(e).name,r=(n=e,jt(n).params?.split(",").map((e=>e.trim().split(" ")))?.map((e=>({type:e[0],name:"indexed"===e[1]?e[2]:e[1],..."indexed"===e[1]?{indexed:!0}:{}})))||[]);var n;return _r(t+"("+r.map((({type:e})=>e)).join(",")+")")}function wr(e){return _r(lt(e))}var _r,xr,Er=h((()=>{Tt(),Nt(),ce(),yr(),_r=e=>br(ie(e))})),Ar=h((()=>{Er(),xr=e=>"string"==typeof e?vr(e):wr(e)}));function Pr(e,t,r,{strict:n}={}){return D(e,{strict:!1})?function(e,t,r,{strict:n}={}){Sr(e,t);let i="0x"+e.replace("0x","").slice(2*(t??0),2*(r??e.length));return n&&Or(i,t,r),i}(e,t,r,{strict:n}):function(e,t,r,{strict:n}={}){Sr(e,t);let i=e.slice(t,r);return n&&Or(i,t,r),i}(e,t,r,{strict:n})}function Sr(e,t){if("number"==typeof t&&t>0&&t>F(e)-1)throw new q({offset:t,position:"start",size:F(e)})}function Or(e,t,r){if("number"==typeof t&&"number"==typeof r&&F(e)!==r-t)throw new q({offset:r,position:"end",size:F(e)})}var Cr=h((()=>{G(),U(),z()}));function Ir(e,t){if(e.length!==t.length)throw new bt({expectedLength:e.length,givenLength:t.length});let r=Tr(function({params:e,values:t}){let r=[];for(let n=0;n<e.length;n++)r.push(kr({param:e[n],value:t[n]}));return r}({params:e,values:t}));return 0===r.length?"0x":r}function kr({param:e,value:t}){let r=Mr(e.type);if(r){let[n,i]=r;return function(e,{length:t,param:r}){let n=null===t;if(!Array.isArray(e))throw new It(e);if(!n&&e.length!==t)throw new gt({expectedLength:t,givenLength:e.length,type:r.type+"["+t+"]"});let i=!1,o=[];for(let t=0;t<e.length;t++){let n=kr({param:r,value:e[t]});n.dynamic&&(i=!0),o.push(n)}if(n||i){let e=Tr(o);if(n){let t=X(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?$e([t,e]):t}}if(i)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:$e(o.map((({encoded:e})=>e)))}}(t,{length:n,param:{...e,type:i}})}if("tuple"===e.type)return function(e,{param:t}){let r=!1,n=[];for(let i=0;i<t.components.length;i++){let o=t.components[i],s=kr({param:o,value:e[Array.isArray(e)?i:o.name]});n.push(s),s.dynamic&&(r=!0)}return{dynamic:r,encoded:r?Tr(n):$e(n.map((({encoded:e})=>e)))}}(t,{param:e});if("address"===e.type)return function(e){if(!We(e))throw new we({address:e});return{dynamic:!1,encoded:K(e.toLowerCase())}}(t);if("bool"===e.type)return{dynamic:!1,encoded:K(J(t))};if(e.type.startsWith("uint")||e.type.startsWith("int")){return function(e,{signed:t}){return{dynamic:!1,encoded:X(e,{size:32,signed:t})}}(t,{signed:e.type.startsWith("int")})}if(e.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),n=F(e);if(!r){let t=e;return n%32!=0&&(t=K(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:$e([K(X(n,{size:32})),t])}}if(n!==parseInt(r))throw new mt({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:K(e,{dir:"right"})}}(t,{param:e});if("string"===e.type)return function(e){let t=ee(e),r=Math.ceil(F(t)/32),n=[];for(let e=0;e<r;e++)n.push(K(Pr(t,32*e,32*(e+1)),{dir:"right"}));return{dynamic:!0,encoded:$e([K(X(F(t),{size:32})),...n])}}(t);throw new Ot(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Tr(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:n,encoded:i}=e[r];t+=n?32:F(i)}let r=[],n=[],i=0;for(let o=0;o<e.length;o++){let{dynamic:s,encoded:a}=e[o];s?(r.push(X(t+i,{size:32})),n.push(a),i+=F(a)):r.push(a)}return $e([...r,...n])}function Mr(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}var jr,Rr=h((()=>{Mt(),Pe(),Ge(),Ze(),Z(),z(),Cr(),ne()})),Nr=h((()=>{Cr(),Er(),jr=e=>Pr("string"==typeof e?vr(e):wr(e),0,4)}));function Lr({abi:e,args:t=[],name:r}){let n=D(r,{strict:!1}),i=e.filter((e=>n?"function"===e.type?jr(e)===r:"event"===e.type&&xr(e)===r:"name"in e&&e.name===r));if(0!==i.length){if(1===i.length)return i[0];for(let e of i)if("inputs"in e)if(t&&0!==t.length){if(e.inputs&&0!==e.inputs.length&&e.inputs.length===t.length&&t.every(((t,r)=>{let n="inputs"in e&&e.inputs[r];return!!n&&Br(t,n)})))return e}else if(!e.inputs||0===e.inputs.length)return e;return i[0]}}function Br(e,t){let r=typeof e,n=t.type;switch(n){case"address":return We(e);case"bool":return"boolean"===r;case"function":case"string":return"string"===r;default:return"tuple"===n&&"components"in t?Object.values(t.components).every(((t,r)=>Br(Object.values(e)[r],t))):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?"number"===r||"bigint"===r:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?"string"===r||e instanceof Uint8Array:!!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)&&(Array.isArray(e)&&e.every((e=>Br(e,{...t,type:n.replace(/(\[[0-9]{0,}\])$/,"")}))))}}var Dr=h((()=>{U(),Ar(),Nr(),Ge()}));function Ur(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}var Fr=h((()=>{}));function zr({abi:e,args:t,functionName:r}){let n=e[0];if(r&&(n=Lr({abi:e,args:t,name:r}),!n))throw new xt(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==n.type)throw new xt(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let i=lt(n);return Ke([jr(i),("inputs"in n&&n.inputs?Ir(n.inputs,t??[]):void 0)??"0x"])}var Hr,qr,Wr,Vr=h((()=>{Mt(),Ze(),Nr(),Rr(),Tt(),Dr()})),Gr=h((()=>{Hr={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},qr={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},Wr={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}}));function $r(e,t){let r=t?""+t+e.toLowerCase():e.substring(2).toLowerCase(),n=br(se(r),"bytes"),i=(t?r.substring((t+"0x").length):r).split("");for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&i[e]&&(i[e]=i[e].toUpperCase()),(15&n[e>>1])>=8&&i[e+1]&&(i[e+1]=i[e+1].toUpperCase());return"0x"+i.join("")}function Kr(e,t){if(!We(e))throw new we({address:e});return $r(e,t)}var Zr=h((()=>{Pe(),ce(),yr(),Ge()}));function Qr(e,t){if("0x"===t&&e.length>0)throw new ft;if(F(t)&&F(t)<32)throw new pt({data:t,params:e,size:F(t)});return function({data:e,params:t}){let r=[],n=0;for(let i=0;i<t.length;i++){if(n>=F(e))throw new pt({data:e,params:t,size:F(e)});let o=t[i],{consumed:s,value:a}=Jr({data:e,param:o,position:n});r.push(a),n+=s}return r}({data:t,params:e})}function Jr({data:e,param:t,position:r}){let n=Mr(t.type);if(n){let[i,o]=n;return function(e,{param:t,length:r,position:n}){if(!r){let r=he(Pr(e,n,n+32,{strict:!0})),i=he(Pr(e,r,r+32,{strict:!0})),o=0,s=[];for(let n=0;n<i;++n){let n=Jr({data:Pr(e,r+32),param:t,position:o});o+=n.consumed,s.push(n.value)}return{value:s,consumed:32}}if(Yr(t)){let i=!Mr(t.type)?.[0],o=0,s=[];for(let a=0;a<r;++a){let r=he(Pr(e,n,n+32,{strict:!0})),c=Jr({data:Pr(e,r),param:t,position:i?o:32*a});o+=c.consumed,s.push(c.value)}return{value:s,consumed:32}}let i=0,o=[];for(let s=0;s<r;++s){let r=Jr({data:e,param:t,position:n+i});i+=r.consumed,o.push(r.value)}return{value:o,consumed:i}}(e,{length:i,param:{...t,type:o},position:r})}if("tuple"===t.type)return function(e,{param:t,position:r}){let n=0===t.components.length||t.components.some((({name:e})=>!e)),i=n?[]:{},o=0;if(Yr(t)){let s=he(Pr(e,r,r+32,{strict:!0}));for(let r=0;r<t.components.length;++r){let a=t.components[r],c=Jr({data:Pr(e,s),param:a,position:o});o+=c.consumed,i[n?r:a?.name]=c.value}return{consumed:32,value:i}}for(let s=0;s<t.components.length;++s){let a=t.components[s],c=Jr({data:e,param:a,position:r+o});o+=c.consumed,i[n?s:a?.name]=c.value}return{consumed:o,value:i}}(e,{param:t,position:r});if("string"===t.type)return function(e,{position:t}){let r=he(Pr(e,t,t+32,{strict:!0})),n=he(Pr(e,r,r+32,{strict:!0}));return 0===n?{consumed:32,value:""}:{consumed:32,value:pe(H(Pr(e,r+32,r+32+n,{strict:!0})))}}(e,{position:r});if(t.type.startsWith("bytes"))return function(e,{param:t,position:r}){let[n,i]=t.type.split("bytes");if(!i){let t=he(Pr(e,r,r+32,{strict:!0})),n=he(Pr(e,t,t+32,{strict:!0}));return 0===n?{consumed:32,value:"0x"}:{consumed:32,value:Pr(e,t+32,t+32+n,{strict:!0})}}return{consumed:32,value:Pr(e,r,r+parseInt(i),{strict:!0})}}(e,{param:t,position:r});let i=Pr(e,r,r+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{param:t}){let r=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?ue(e,{signed:r}):he(e,{signed:r})}}(i,{param:t});if("address"===t.type)return{consumed:32,value:$r(Pr(i,-20))};if("bool"===t.type)return{consumed:32,value:de(i)};throw new Ct(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function Yr(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(Yr);let r=Mr(e.type);return!(!r||!Yr({...e,type:r[1]}))}var Xr=h((()=>{Mt(),Zr(),z(),Cr(),V(),fe(),Rr()}));function en({abi:e,data:t}){let r=Pr(t,0,4);if("0x"===r)throw new ft;let n=[...e||[],qr,Wr].find((e=>"error"===e.type&&r===jr(lt(e))));if(!n)throw new yt(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:n,args:"inputs"in n&&n.inputs&&n.inputs.length>0?Qr(n.inputs,Pr(t,4)):void 0,errorName:n.name}}var tn,rn=h((()=>{Gr(),Mt(),Cr(),Nr(),Xr(),Tt()})),nn=h((()=>{tn=(e,t,r)=>JSON.stringify(e,((e,r)=>{let n="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,n):n}),r)}));function on({abiItem:e,args:t,includeFunctionName:r=!0,includeName:n=!1}){if("name"in e&&"inputs"in e&&e.inputs)return(r?e.name:"")+"("+e.inputs.map(((e,r)=>(n&&e.name?e.name+": ":"")+("object"==typeof t[r]?tn(t[r]):t[r]))).join(", ")+")"}var sn,an,cn,ln,un,dn,hn,pn,fn,gn,mn,bn,yn,vn,wn,_n,xn,En,An,Pn,Sn,On,Cn,In,kn,Tn,Mn,jn,Rn,Nn,Ln=h((()=>{nn()})),Bn=h((()=>{Fr(),Gr(),rn(),Tt(),Ln(),Dr(),Je(),He(),Mt(),C(),at(),w(),sn=class extends x{constructor(e,{account:t,docsPath:r,chain:n,data:i,gas:o,gasPrice:s,maxFeePerGas:a,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){let h=t?Ur(t):void 0,p=Ye({from:h?.address,to:u,value:typeof d<"u"&&Qe(d)+" "+(n?.nativeCurrency.symbol||"ETH"),data:i,gas:o,gasPrice:typeof s<"u"&&Ie(s)+" gwei",maxFeePerGas:typeof a<"u"&&Ie(a)+" gwei",maxPriorityFeePerGas:typeof c<"u"&&Ie(c)+" gwei",nonce:l});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",p].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}},an=class extends x{constructor(e,{abi:r,args:n,contractAddress:i,docsPath:o,functionName:s,sender:a}){let c=Lr({abi:r,args:n,name:s}),l=c?on({abiItem:c,args:n,includeFunctionName:!1,includeName:!1}):void 0,u=c?lt(c,{includeName:!0}):void 0,d=Ye({address:i&&t(i),function:u,args:l&&"()"!==l&&""+[...Array(s?.length??0).keys()].map((()=>" ")).join("")+l,sender:a});super(e.shortMessage||'An unknown error occurred while executing the contract function "'+s+'".',{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",d].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=r,this.args=n,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=a}},cn=class extends x{constructor({abi:e,data:t,functionName:r,message:n}){let i,o,s,a,c;if(t&&"0x"!==t)try{o=en({abi:e,data:t});let{abiItem:r,errorName:n,args:i}=o;if("Error"===n)a=i[0];else if("Panic"===n){let[e]=i;a=Hr[e]}else{let e=r?lt(r,{includeName:!0}):void 0,t=r&&i?on({abiItem:r,args:i,includeFunctionName:!1,includeName:!1}):void 0;s=[e?"Error: "+e:"",t&&"()"!==t?"       "+[...Array(n?.length??0).keys()].map((()=>" ")).join("")+t:""]}}catch(e){i=e}else n&&(a=n);i instanceof yt&&(c=i.signature,s=['Unable to decode signature "'+c+'" as it was not found on the provided ABI.',"Make sure you are using the correct ABI and that the error exists on it.","You can look up the decoded signature here: https://openchain.xyz/signatures?query="+c+"."]),super(a&&"execution reverted"!==a||c?['The contract function "'+r+'" reverted with the following '+(c?"signature":"reason")+":",a||c].join("\n"):'The contract function "'+r+'" reverted.',{cause:i,metaMessages:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=o,this.reason=a,this.signature=c}},ln=class extends x{constructor({functionName:e}){super('The contract function "'+e+'" returned no data ("0x").',{metaMessages:["This could be due to any of the following:",'  - The contract does not have the function "'+e+'",',"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}},un=class extends x{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}})),Dn=h((()=>{nn(),C(),w(),dn=class extends x{constructor({body:e,details:t,headers:n,status:i,url:o}){super("HTTP request failed.",{details:t,metaMessages:[i&&"Status: "+i,"URL: "+r(o),e&&"Request body: "+tn(e)].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=n,this.status=i,this.url=o}},hn=class extends x{constructor({body:e,details:t,url:n}){super("WebSocket request failed.",{details:t,metaMessages:["URL: "+r(n),"Request body: "+tn(e)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}},pn=class extends x{constructor({body:e,error:t,url:n}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:["URL: "+r(n),"Request body: "+tn(e)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}},fn=class extends x{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:["URL: "+r(t),"Request body: "+tn(e)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}})),Un=h((()=>{C(),Dn(),-1,gn=class extends x{constructor(e,{code:t,docsPath:r,metaMessages:n,shortMessage:i}){super(i,{cause:e,docsPath:r,metaMessages:n||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof pn?e.code:t??-1}},mn=class extends gn{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}},bn=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}},Object.defineProperty(bn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700}),yn=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}},Object.defineProperty(yn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600}),vn=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}},Object.defineProperty(vn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601}),wn=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}},Object.defineProperty(wn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602}),_n=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}},Object.defineProperty(_n,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603}),xn=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}},Object.defineProperty(xn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3}),En=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}},Object.defineProperty(En,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001}),An=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}},Object.defineProperty(An,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002}),Pn=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}},Object.defineProperty(Pn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003}),Sn=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}},Object.defineProperty(Sn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004}),On=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}},Object.defineProperty(On,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005}),Cn=class e extends gn{constructor(t){super(t,{code:e.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}},Object.defineProperty(Cn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006}),In=class e extends mn{constructor(t){super(t,{code:e.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}},Object.defineProperty(In,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001}),kn=class e extends mn{constructor(t){super(t,{code:e.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}},Object.defineProperty(kn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100}),Tn=class e extends mn{constructor(t){super(t,{code:e.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}},Object.defineProperty(Tn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200}),Mn=class e extends mn{constructor(t){super(t,{code:e.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}},Object.defineProperty(Mn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900}),jn=class e extends mn{constructor(t){super(t,{code:e.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}},Object.defineProperty(jn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901}),Rn=class e extends mn{constructor(t){super(t,{code:e.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}},Object.defineProperty(Rn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902}),Nn=class extends gn{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}}));function Fn(e,t){let r=(e.details||"").toLowerCase(),n=e.walk((e=>e.code===ke.code));return n instanceof x?new ke({cause:e,message:n.details}):ke.nodeMessage.test(r)?new ke({cause:e,message:e.details}):Te.nodeMessage.test(r)?new Te({cause:e,maxFeePerGas:t?.maxFeePerGas}):Me.nodeMessage.test(r)?new Me({cause:e,maxFeePerGas:t?.maxFeePerGas}):je.nodeMessage.test(r)?new je({cause:e,nonce:t?.nonce}):Re.nodeMessage.test(r)?new Re({cause:e,nonce:t?.nonce}):Ne.nodeMessage.test(r)?new Ne({cause:e,nonce:t?.nonce}):Le.nodeMessage.test(r)?new Le({cause:e}):Be.nodeMessage.test(r)?new Be({cause:e,gas:t?.gas}):De.nodeMessage.test(r)?new De({cause:e,gas:t?.gas}):Ue.nodeMessage.test(r)?new Ue({cause:e}):Fe.nodeMessage.test(r)?new Fe({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new ze({cause:e})}var zn=h((()=>{C(),qe()}));function Hn(e,{format:t}){return t?Object.keys(t({})).reduce(((t,r)=>(e?.hasOwnProperty(r)&&(t[r]=e[r]),t)),{}):{}}var qn=h((()=>{}));function Wn(e){let{account:t,gasPrice:r,maxFeePerGas:n,maxPriorityFeePerGas:i,to:o}=e,s=t?Ur(t):void 0;if(s&&!We(s.address))throw new we({address:s.address});if(o&&!We(o))throw new we({address:o});if(typeof r<"u"&&(typeof n<"u"||typeof i<"u"))throw new Xe;if(n&&n>0x2n**0x100n-0x1n)throw new Te({maxFeePerGas:n});if(i&&n&&i>n)throw new Fe({maxFeePerGas:n,maxPriorityFeePerGas:i})}var Vn=h((()=>{Fr(),Pe(),qe(),at(),Ge()}));function Gn({abi:e,args:t,functionName:r,data:n}){let i=e[0];if(r&&(i=Lr({abi:e,args:t,name:r}),!i))throw new xt(r,{docsPath:$n});if("function"!==i.type)throw new xt(void 0,{docsPath:$n});if(!i.outputs)throw new Et(i.name,{docsPath:$n});let o=Qr(i.outputs,n);return o&&o.length>1?o:o&&1===o.length?o[0]:void 0}var $n,Kn,Zn,Qn,Jn,Yn,Xn,ei,ti,ri=h((()=>{Mt(),Xr(),Dr(),$n="/docs/contract/decodeFunctionResult"})),ni=h((()=>{Kn=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],Zn=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],Qn=[...Zn,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],Jn=[...Zn,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Yn=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Xn=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],ei=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]})),ii=h((()=>{ti="0x82ad56cb"}));var oi=h((()=>{Bn(),qe(),zn()}));function si({fn:e,id:t,shouldSplitBatch:r,wait:n=0}){let i=async()=>{let t=s();o();let r=t.map((({args:e})=>e));0!==r.length&&e(r).then((e=>{t.forEach((({pendingPromise:t},r)=>t.resolve?.([e[r],e])))})).catch((e=>{t.forEach((({pendingPromise:t})=>t.reject?.(e)))}))},o=()=>ai.delete(t),s=()=>ai.get(t)||[],a=e=>ai.set(t,[...s(),e]);return{flush:o,async schedule(e){let t={},o=new Promise(((e,r)=>{t.resolve=e,t.reject=r}));return r?.([...s().map((({args:e})=>e)),e])&&i(),s().length>0?(a({args:e,pendingPromise:t}),o):(a({args:e,pendingPromise:t}),setTimeout(i,n),o)}}}var ai,ci,li,ui,di=h((()=>{ai=new Map})),hi=h((()=>{nn(),C(),w(),ci=class extends x{constructor({callbackSelector:e,cause:t,data:n,extraData:i,sender:o,urls:s}){super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",s&&["  Gateway URL(s):",...s.map((e=>"    "+r(e)))],"  Sender: "+o,"  Data: "+n,"  Callback selector: "+e,"  Extra data: "+i].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}},li=class extends x{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:["Gateway URL: "+r(t),"Response: "+tn(e)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}},ui=class extends x{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:["Contract address: "+t,"OffchainLookup sender address: "+e]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}}));var pi=h((()=>{Pe(),Ge()})),fi={};async function gi(e,{blockNumber:t,blockTag:r,data:n,to:i}){let{args:o}=en({data:n,abi:[yi]}),[s,a,c,l,u]=o;try{if(!function(e,t){if(!We(e))throw new we({address:e});if(!We(t))throw new we({address:t});return e.toLowerCase()===t.toLowerCase()}(i,s))throw new ui({sender:s,to:i});let n=await mi({data:c,sender:s,urls:a}),{data:o}=await wi(e,{blockNumber:t,blockTag:r,data:$e([l,Ir([{type:"bytes"},{type:"bytes"}],[n,u])]),to:i});return o}catch(e){throw new ci({callbackSelector:l,cause:e,data:n,extraData:u,sender:s,urls:a})}}async function mi({data:e,sender:t,urls:r}){let n=new Error("An unknown error occurred.");for(let i=0;i<r.length;i++){let o=r[i],s=o.includes("{sender}")||o.includes("{data}")?"GET":"POST",a="POST"===s?{data:e,sender:t}:void 0;try{let r,i=await fetch(o.replace("{sender}",t).replace("{data}",e),{body:JSON.stringify(a),method:s});if(r=i.headers.get("Content-Type")?.startsWith("application/json")?(await i.json()).data:await i.text(),!i.ok){n=new dn({body:a,details:tn(r.error)||i.statusText,headers:i.headers,status:i.status,url:o});continue}if(!D(r)){n=new li({result:r,url:o});continue}return r}catch(e){n=new dn({body:a,details:e.message,url:o})}}throw n}f(fi,{ccipFetch:()=>mi,offchainLookup:()=>gi,offchainLookupAbiItem:()=>yi,offchainLookupSignature:()=>bi});var bi,yi,vi=h((()=>{_i(),hi(),Dn(),rn(),Rr(),pi(),Ze(),U(),nn(),bi="0x556f1830",yi={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]}}));async function wi(e,t){let{account:r=e.account,batch:n=!!e.batch?.multicall,blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:f,...g}=t,m=r?Ur(r):void 0;try{Wn(t);let r=(i?X(i):void 0)||o,b=e.chain?.formatters?.transactionRequest?.format||be,y=b({...Hn(g,{format:b}),from:m?.address,accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:f});if(n&&function({request:e}){let{data:t,to:r,...n}=e;return!(!t||t.startsWith(ti)||!r||Object.values(n).filter((e=>typeof e<"u")).length>0)}({request:y}))try{return await async function(e,t){let{batchSize:r=1024,wait:n=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:c}=t,l=a;if(!l){if(!e.chain)throw new S;l=M({blockNumber:i,chain:e.chain,contract:"multicall3"})}let u=(i?X(i):void 0)||o,{schedule:d}=si({id:e.uid+"."+u,wait:n,shouldSplitBatch:e=>e.reduce(((e,{data:t})=>e+(t.length-2)),0)>2*r,fn:async t=>{let r=t.map((e=>({allowFailure:!0,callData:e.data,target:e.to}))),n=zr({abi:Kn,args:[r],functionName:"aggregate3"}),i=await e.request({method:"eth_call",params:[{data:n,to:l},u]});return Gn({abi:Kn,args:[r],functionName:"aggregate3",data:i||"0x"})}}),[{returnData:h,success:p}]=await d({data:s,to:c});if(!p)throw new un({data:h});return"0x"===h?{data:void 0}:{data:h}}(e,{...y,blockNumber:i,blockTag:o})}catch(e){if(!(e instanceof S||e instanceof E))throw e}let v=await e.request({method:"eth_call",params:r?[y,r]:[y]});return"0x"===v?{data:void 0}:{data:v}}catch(r){let n=function(e){if(!(e instanceof x))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(r),{offchainLookup:i,offchainLookupSignature:o}=await Promise.resolve().then((()=>(vi(),fi)));if(n?.slice(0,10)===o&&p)return{data:await i(e,{data:n,to:p})};throw function(e,{docsPath:t,...r}){let n=Fn(e,r);return n instanceof ze&&(n=e),new sn(n,{docsPath:t,...r})}(r,{...t,account:m,chain:e.chain})}}var _i=h((()=>{Fr(),ni(),ii(),C(),I(),Bn(),ri(),Vr(),L(),ne(),oi(),qn(),Ae(),di(),Vn()})),xi={};f(xi,{default:()=>Ai});var Ei,Ai,Pi=h((()=>{Ei=null,typeof WebSocket<"u"?Ei=WebSocket:typeof MozWebSocket<"u"?Ei=MozWebSocket:typeof global<"u"?Ei=global.WebSocket||global.MozWebSocket:typeof window<"u"?Ei=window.WebSocket||window.MozWebSocket:typeof self<"u"&&(Ei=self.WebSocket||self.MozWebSocket),Ai=Ei}));var Si,Oi,Ci,Ii,ki,Ti,Mi=h((()=>{BigInt(0),BigInt(1),BigInt(2)})),ji=h((()=>{Symbol(),Si=Symbol(),Oi=Object.getPrototypeOf,Ci=new WeakMap,Ii=e=>e&&(Ci.has(e)?Ci.get(e):Oi(e)===Object.prototype||Oi(e)===Array.prototype),ki=e=>Ii(e)&&e[Si]||null,Ti=(e,t=!0)=>{Ci.set(e,t)}}));function Ri(e={}){return Hi(e)}function Ni(e,t,r){let n=Ui.get(e);"production"!==(Bi.env?Bi.env.MODE:void 0)&&!n&&console.warn("Please use proxy object");let i,o=[],s=n[3],a=!1,c=s((e=>{o.push(e),r?t(o.splice(0)):i||(i=Promise.resolve().then((()=>{i=void 0,a&&t(o.splice(0))})))}));return a=!0,()=>{a=!1,c()}}function Li(e){return Fi.add(e),e}var Bi,Di,Ui,Fi,zi,Hi,qi=h((()=>{ji(),Bi={},Di=e=>"object"==typeof e&&null!==e,Ui=new WeakMap,Fi=new WeakSet,zi=(e=Object.is,t=((e,t)=>new Proxy(e,t)),r=(e=>Di(e)&&!Fi.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),n=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),i=new WeakMap,o=((e,t,r=n)=>{let s=i.get(e);if(s?.[0]===t)return s[1];let a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return Ti(a,!0),i.set(e,[t,a]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(a,t))return;let n=Reflect.get(e,t),i={value:n,enumerable:!0,configurable:!0};if(Fi.has(n))Ti(n,!1);else if(n instanceof Promise)delete i.value,i.get=()=>r(n);else if(Ui.has(n)){let[e,t]=Ui.get(n);i.value=o(e,t(),r)}Object.defineProperty(a,t,i)})),Object.preventExtensions(a)}),s=new WeakMap,a=[1,1],c=(n=>{if(!Di(n))throw new Error("object required");let i=s.get(n);if(i)return i;let l=a[0],u=new Set,d=(e,t=++a[0])=>{l!==t&&(l=t,u.forEach((r=>r(e,t))))},h=a[1],p=e=>(t,r)=>{let n=[...t];n[1]=[e,...n[1]],d(n,r)},f=new Map,g=e=>{var t;let r=f.get(e);r&&(f.delete(e),null==(t=r[1])||t.call(r))},m=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),b=t(m,{deleteProperty(e,t){let r=Reflect.get(e,t);g(t);let n=Reflect.deleteProperty(e,t);return n&&d(["delete",[t],r]),n},set(t,n,i,o){let a=Reflect.has(t,n),l=Reflect.get(t,n,o);if(a&&(e(l,i)||s.has(i)&&e(l,s.get(i))))return!0;g(n),Di(i)&&(i=ki(i)||i);let h=i;if(i instanceof Promise)i.then((e=>{i.status="fulfilled",i.value=e,d(["resolve",[n],e])})).catch((e=>{i.status="rejected",i.reason=e,d(["reject",[n],e])}));else{!Ui.has(i)&&r(i)&&(h=c(i));let e=!Fi.has(h)&&Ui.get(h);e&&((e,t)=>{if("production"!==(Bi.env?Bi.env.MODE:void 0)&&f.has(e))throw new Error("prop listener already exists");if(u.size){let r=t[3](p(e));f.set(e,[t,r])}else f.set(e,[t])})(n,e)}return Reflect.set(t,n,h,o),d(["set",[n],i,l]),!0}});s.set(n,b);let y=[m,(e=++a[1])=>(h!==e&&!u.size&&(h=e,f.forEach((([t])=>{let r=t[1](e);r>l&&(l=r)}))),l),o,e=>(u.add(e),1===u.size&&f.forEach((([e,t],r)=>{if("production"!==(Bi.env?Bi.env.MODE:void 0)&&t)throw new Error("remove already exists");let n=e[3](p(r));f.set(r,[e,n])})),()=>{u.delete(e),0===u.size&&f.forEach((([e,t],r)=>{t&&(t(),f.set(r,[e]))}))})];return Ui.set(b,y),Reflect.ownKeys(n).forEach((e=>{let t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(b[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(m,e,t)})),b}))=>[c,Ui,Fi,e,t,r,n,i,o,s,a],[Hi]=zi()}));function Wi(e,t,r,n){let i=e[t];return Ni(e,(()=>{let n=e[t];Object.is(i,n)||r(i=n)}),n)}var Vi,Gi,$i,Ki,Zi,Qi,Ji,Yi,Xi,eo,to,ro,no,io,oo,so,ao,co,lo,uo,ho,po,fo,go,mo,bo,yo,vo,wo,_o,xo,Eo,Ao,Po,So,Oo,Co,Io,ko,To,Mo,jo,Ro,No,Lo,Bo,Do,Uo,Fo,zo,Ho,qo=h((()=>{qi(),Symbol()})),Wo=p((e=>{"use strict";var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||p}function b(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=y.prototype=new b;v.constructor=y,f(v,m.prototype),v.isPureReactComponent=!0;var w=Array.isArray,_=Object.prototype.hasOwnProperty,x={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function A(e,r,n){var i,o={},s=null,a=null;if(null!=r)for(i in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(s=""+r.key),r)_.call(r,i)&&!E.hasOwnProperty(i)&&(o[i]=r[i]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:t,type:e,key:s,ref:a,props:o,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var S=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function C(e,n,i,o,s){var a=typeof e;("undefined"===a||"boolean"===a)&&(e=null);var c,l,u,d=!1;if(null===e)d=!0;else switch(a){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case t:case r:d=!0}}if(d)return s=s(d=e),e=""===o?"."+O(d,0):o,w(s)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),C(s,n,i,"",(function(e){return e}))):null!=s&&(P(s)&&(c=s,l=i+(!s.key||d&&d.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e,s={$$typeof:t,type:c.type,key:l,ref:c.ref,props:c.props,_owner:c._owner}),n.push(s)),1;if(d=0,o=""===o?".":o+":",w(e))for(var p=0;p<e.length;p++){var f=o+O(a=e[p],p);d+=C(a,n,i,f,s)}else if("function"==typeof(f=null===(u=e)||"object"!=typeof u?null:"function"==typeof(u=h&&u[h]||u["@@iterator"])?u:null))for(e=f.call(e),p=0;!(a=e.next()).done;)d+=C(a=a.value,n,i,f=o+O(a,p++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return d}function I(e,t,r){if(null==e)return e;var n=[],i=0;return C(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function k(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)}),(function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},M={transition:null},j={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:M,ReactCurrentOwner:x};e.Children={map:I,forEach:function(e,t,r){I(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},e.Component=m,e.Fragment=n,e.Profiler=o,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,e.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=f({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,a=x.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in r)_.call(r,l)&&!E.hasOwnProperty(l)&&(i[l]=void 0===r[l]&&void 0!==c?c[l]:r[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:o,ref:s,props:i,_owner:a}},e.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},e.createElement=A,e.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=P,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:k}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},e.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(e,t){return T.current.useCallback(e,t)},e.useContext=function(e){return T.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return T.current.useDeferredValue(e)},e.useEffect=function(e,t){return T.current.useEffect(e,t)},e.useId=function(){return T.current.useId()},e.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},e.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.current.useMemo(e,t)},e.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},e.useRef=function(e){return T.current.useRef(e)},e.useState=function(e){return T.current.useState(e)},e.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},e.useTransition=function(){return T.current.useTransition()},e.version="18.2.0"})),Vo=p(((e,t)=>{"use strict";t.exports=Wo()})),Go=h((()=>{b(Vo(),1)})),$o=h((()=>{qo(),Go()})),Ko=h((()=>{Vi={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3}})),Zo=h((()=>{Ko(),Gi={isMobile:()=>typeof window<"u"&&!(!window.matchMedia("(pointer:coarse)").matches&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let e=navigator.userAgent.toLowerCase();return Gi.isMobile()&&e.includes("android")},isIos(){let e=navigator.userAgent.toLowerCase();return Gi.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>typeof window<"u",isPairingExpired:e=>!e||e-Date.now()<=Vi.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=Vi.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+Vi.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e,t=500){let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout((function(){e(...n)}),t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(Gi.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;return r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r+="://"),r.endsWith("/")||(r+="/"),{redirect:r+"wc?uri="+encodeURIComponent(t),href:r}},formatUniversalUrl(e,t){if(!Gi.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;return r.endsWith("/")||(r+="/"),{redirect:r+"wc?uri="+encodeURIComponent(t),href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){let t=new Promise(((t,r)=>{let n=new Image;n.onload=t,n.onerror=r,n.crossOrigin="anonymous",n.src=e}));return Promise.race([t,Gi.wait(2e3)])},formatBalance(e,t){let r;return"0.0"===e?r="0":"string"==typeof e&&e.length>6?r=e.substring(0,6):"string"==typeof e&&(r=e),r?r+" "+t:"0.0000"}}})),Qo=h((()=>{$o(),qi(),Zo(),$i=Ri({isConnected:!1}),Ki={state:$i,subscribe:e=>Ni($i,(()=>e($i))),subscribeKey:(e,t)=>Wi($i,e,t),setIsConnected(e){$i.isConnected=e},setCaipAddress(e){$i.caipAddress=e,$i.address=e?Gi.getPlainAddress(e):void 0},setBalance(e,t){$i.balance=e,$i.balanceSymbol=t},setProfileName(e){$i.profileName=e},setProfileImage(e){$i.profileImage=e},setAddressExplorerUrl(e){$i.addressExplorerUrl=e},resetAccount(){$i.isConnected=!1,$i.caipAddress=void 0,$i.address=void 0,$i.balance=void 0,$i.balanceSymbol=void 0,$i.profileName=void 0,$i.profileImage=void 0,$i.addressExplorerUrl=void 0}}})),Jo=h((()=>{Zi=class{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){let r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...r}){let n=this.createUrl(r);return(await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...r}){let n=this.createUrl(r);return(await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...r}){let n=this.createUrl(r);return(await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach((([e,t])=>{t&&r.searchParams.append(e,t)})),r}}})),Yo=h((()=>{Qi="WALLETCONNECT_DEEPLINK_CHOICE",Ji="@w3m/recent",Yi={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(Qi,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(Qi);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Qi)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=Yi.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(Ji,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(Ji);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}}})),Xo=h((()=>{$o(),qi(),Xi=Ri({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),eo={state:Xi,subscribeNetworkImages:e=>Ni(Xi.networkImages,(()=>e(Xi.networkImages))),subscribeKey:(e,t)=>Wi(Xi,e,t),setWalletImage(e,t){Xi.walletImages[e]=t},setNetworkImage(e,t){Xi.networkImages[e]=t},setConnectorImage(e,t){Xi.connectorImages[e]=t},setTokenImage(e,t){Xi.tokenImages[e]=t}}})),es=h((()=>{$o(),qi(),to=Ri({connectors:[]}),ro={state:to,subscribeKey:(e,t)=>Wi(to,e,t),setConnectors(e){to.connectors=e},addConnector(e){to.connectors.push(e)},removeConnectorById(e){to.connectors=to.connectors.filter((t=>t.id!==e))}}})),ts=h((()=>{$o(),qi(),no=Ri({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),io={state:no,subscribeKey:(e,t)=>Wi(no,e,t),_getClient(){if(!no._client)throw new Error("NetworkController client not set");return no._client},setClient(e){no._client=Li(e)},setCaipNetwork(e){no.caipNetwork=e},setDefaultCaipNetwork(e){no.caipNetwork=e,no.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){no.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();no.supportsAllNetworks=e.supportsAllNetworks,no.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),no.caipNetwork=e},resetNetwork(){no.isDefaultCaipNetwork||(no.caipNetwork=void 0),no.approvedCaipNetworkIds=void 0,no.supportsAllNetworks=!0}}})),rs=h((()=>{$o(),qi(),oo=Ri({projectId:""}),so={state:oo,subscribeKey:(e,t)=>Wi(oo,e,t),setProjectId(e){oo.projectId=e},setIncludeWalletIds(e){oo.includeWalletIds=e},setExcludeWalletIds(e){oo.excludeWalletIds=e},setFeaturedWalletIds(e){oo.featuredWalletIds=e},setTokens(e){oo.tokens=e},setTermsConditionsUrl(e){oo.termsConditionsUrl=e},setPrivacyPolicyUrl(e){oo.privacyPolicyUrl=e},setCustomWallets(e){oo.customWallets=e}}})),ns=h((()=>{$o(),qi(),Zo(),Jo(),Yo(),Xo(),es(),ts(),rs(),ao=new Zi({baseUrl:"https://api.web3modal.com"}),"40","4","w3m",co=Ri({sdkVersion:"html-wagmi-undefined",page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),lo={state:co,subscribeKey:(e,t)=>Wi(co,e,t),setSdkVersion(e){co.sdkVersion=e},_getApiHeaders:()=>({"x-project-id":so.state.projectId,"x-sdk-type":"w3m","x-sdk-version":co.sdkVersion}),async _fetchWalletImage(e){let t=ao.baseUrl+"/getWalletImage/"+e,r=await ao.getBlob({path:t,headers:lo._getApiHeaders()});eo.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=ao.baseUrl+"/public/getAssetImage/"+e,r=await ao.getBlob({path:t,headers:lo._getApiHeaders()});eo.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=ao.baseUrl+"/public/getAssetImage/"+e,r=await ao.getBlob({path:t,headers:lo._getApiHeaders()});eo.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=io.state,t=e?.map((({imageId:e})=>e)).filter(Boolean);t&&await Promise.allSettled(t.map((e=>lo._fetchNetworkImage(e))))},async fetchConnectorImages(){let{connectors:e}=ro.state,t=e.map((({imageId:e})=>e)).filter(Boolean);await Promise.allSettled(t.map((e=>lo._fetchConnectorImage(e))))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=so.state;if(e?.length){let{data:t}=await ao.get({path:"/getWallets",headers:lo._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}}),r=t.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(r.map((e=>lo._fetchWalletImage(e)))),co.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=so.state,n=[...t??[],...r??[]].filter(Boolean),{data:i,count:o}=await ao.get({path:"/getWallets",headers:lo._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:n?.join(",")}}),s=Yi.getRecentWallets(),a=i.map((e=>e.image_id)).filter(Boolean),c=s.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...a,...c].map((e=>lo._fetchWalletImage(e)))),co.recommended=i,co.count=o??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=so.state,i=[...co.recommended.map((({id:e})=>e)),...r??[],...n??[]].filter(Boolean),{data:o,count:s}=await ao.get({path:"/getWallets",headers:lo._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:i.join(",")}}),a=o.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...a.map((e=>lo._fetchWalletImage(e))),Gi.wait(300)]),co.wallets=[...co.wallets,...o],co.count=s>co.count?s:co.count,co.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=so.state;co.search=[];let{data:n}=await ao.get({path:"/getWallets",headers:lo._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),i=n.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...i.map((e=>lo._fetchWalletImage(e))),Gi.wait(300)]),co.search=n},prefetch(){co.prefetchPromise=Promise.race([Promise.allSettled([lo.fetchFeaturedWallets(),lo.fetchRecommendedWallets(),lo.fetchNetworkImages(),lo.fetchConnectorImages()]),Gi.wait(3e3)])}}})),is=h((()=>{$o(),qi(),uo=Ri({view:"Connect",history:["Connect"]}),ho={state:uo,subscribeKey:(e,t)=>Wi(uo,e,t),push(e,t){e!==uo.view&&(uo.view=e,uo.history.push(e),uo.data=t)},reset(e){uo.view=e,uo.history=[e]},replace(e){uo.history.length>1&&uo.history.at(-1)!==e&&(uo.view=e,uo.history[uo.history.length-1]=e)},goBack(){if(uo.history.length>1){uo.history.pop();let[e]=uo.history.slice(-1);e&&(uo.view=e)}}}})),os=h((()=>{$o(),qi(),Qo(),ns(),is(),po=Ri({open:!1}),fo={state:po,subscribeKey:(e,t)=>Wi(po,e,t),async open(e){await lo.state.prefetchPromise,e?.view?ho.reset(e.view):Ki.state.isConnected?ho.reset("Account"):ho.reset("Connect"),po.open=!0},close(){po.open=!1}}})),ss=h((()=>{$o(),qi(),Zo(),Yo(),go=Ri({wcError:!1,buffering:!1}),mo={state:go,subscribeKey:(e,t)=>Wi(go,e,t),_getClient(){if(!go._client)throw new Error("ConnectionController client not set");return go._client},setClient(e){go._client=Li(e)},connectWalletConnect(){go.wcPromise=this._getClient().connectWalletConnect((e=>{go.wcUri=e,go.wcPairingExpiry=Gi.getPairingExpiry()}))},async connectExternal(e){await(this._getClient().connectExternal?.(e))},checkInjectedInstalled(e){return this._getClient().checkInjectedInstalled?.(e)},resetWcConnection(){go.wcUri=void 0,go.wcPairingExpiry=void 0,go.wcPromise=void 0,go.wcLinking=void 0,go.recentWallet=void 0,Yi.deleteWalletConnectDeepLink()},setWcLinking(e){go.wcLinking=e},setWcError(e){go.wcError=e,go.buffering=!1},setRecentWallet(e){go.recentWallet=e},setBuffering(e){go.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}}})),as=h((()=>{$o(),qi(),bo=Ri({message:"",variant:"success",open:!1}),yo={state:bo,subscribeKey:(e,t)=>Wi(bo,e,t),showSuccess(e){bo.message=e,bo.variant="success",bo.open=!0},showError(e){bo.message=e,bo.variant="error",bo.open=!0},hide(){bo.open=!1}}})),cs=h((()=>{qi(),vo=Ri({themeMode:"dark",themeVariables:{}}),wo={state:vo,subscribe:e=>Ni(vo,(()=>e(vo))),setThemeMode(e){vo.themeMode=e},setThemeVariables(e){vo.themeVariables={...vo.themeVariables,...e}}}})),ls=h((()=>{Jo(),rs(),_o=new Zi({baseUrl:"https://rpc.walletconnect.com"}),xo={fetchIdentity:({caipChainId:e,address:t})=>_o.get({path:"/v1/identity/"+t,params:{chainId:e,projectId:so.state.projectId}})}})),us=h((()=>{Xo(),Eo={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?eo.state.walletImages[e.image_id]:void 0,getNetworkImage(e){if(e?.imageId)return eo.state.networkImages[e.imageId]},getConnectorImage(e){if(e?.imageId)return eo.state.connectorImages[e.imageId]}}})),ds=h((()=>{os(),is(),Qo(),ts(),ss(),es(),as(),ns(),Xo(),cs(),rs(),ls(),us(),Ko(),Zo(),Yo()})),hs=h((()=>{Ao=window,Po=Ao.ShadowRoot&&(void 0===Ao.ShadyCSS||Ao.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,So=Symbol(),Oo=new WeakMap,Co=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==So)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Po&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=Oo.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Oo.set(t,e))}return e}toString(){return this.cssText}},Io=e=>new Co("string"==typeof e?e:e+"",void 0,So),ko=(e,...t)=>{let r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new Co(r,e,So)},To=(e,t)=>{Po?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{let r=document.createElement("style"),n=Ao.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)}))},Mo=Po?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Io(t)})(e):e})),ps=h((()=>{hs(),hs(),Ro=window,No=Ro.trustedTypes,Lo=No?No.emptyScript:"",Bo=Ro.reactiveElementPolyfillSupport,Do={toAttribute(e,t){switch(t){case Boolean:e=e?Lo:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Uo=(e,t)=>t!==e&&(t==t||e==e),Fo={attribute:!0,type:String,converter:Do,reflect:!1,hasChanged:Uo},zo="finalized",(Ho=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach(((t,r)=>{let n=this._$Ep(r,t);void 0!==n&&(this._$Ev.set(n,r),e.push(n))})),e}static createProperty(e,t=Fo){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){let i=this[e];this[t]=n,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Fo}static finalize(){if(this.hasOwnProperty(zo))return!1;this[zo]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(Mo(e))}else void 0!==e&&t.push(Mo(e));return t}static _$Ep(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;let t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return To(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Fo){var n;let i=this.constructor._$Ep(e,r);if(void 0!==i&&!0===r.reflect){let o=(void 0!==(null===(n=r.converter)||void 0===n?void 0:n.toAttribute)?r.converter:Do).toAttribute(t,r.type);this._$El=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,t){var r;let n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){let e=n.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:Do;this._$El=i,this[i]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Uo)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}})[zo]=!0,Ho.elementProperties=new Map,Ho.elementStyles=[],Ho.shadowRootOptions={mode:"open"},Bo?.({ReactiveElement:Ho}),(null!==(jo=Ro.reactiveElementVersions)&&void 0!==jo?jo:Ro.reactiveElementVersions=[]).push("1.6.3")}));function fs(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==vs?vs.createHTML(t):t}function gs(e,t,r=e,n){var i,o,s,a;if(t===Fs)return t;let c=void 0!==n?null===(i=r._$Co)||void 0===i?void 0:i[n]:r._$Cl,l=Ss(t)?void 0:t._$litDirective$;return c?.constructor!==l&&(null===(o=c?._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,r,n)),void 0!==n?(null!==(s=(a=r)._$Co)&&void 0!==s?s:a._$Co=[])[n]=c:r._$Cl=c),void 0!==c&&(t=gs(e,c._$AS(e,t.values),c,n)),t}var ms,bs,ys,vs,ws,_s,xs,Es,As,Ps,Ss,Os,Cs,Is,ks,Ts,Ms,js,Rs,Ns,Ls,Bs,Ds,Us,Fs,zs,Hs,qs,Ws,Vs,Gs,$s,Ks,Zs,Qs,Js,Ys,Xs,ea,ta,ra,na,ia,oa,sa,aa,ca=h((()=>{bs=window,ys=bs.trustedTypes,vs=ys?ys.createPolicy("lit-html",{createHTML:e=>e}):void 0,ws="$lit$",_s="lit$"+(Math.random()+"").slice(9)+"$",Es="<"+(xs="?"+_s)+">",As=document,Ps=()=>As.createComment(""),Ss=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Os=Array.isArray,Cs=e=>Os(e)||"function"==typeof e?.[Symbol.iterator],Is="[ \t\n\f\r]",ks=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ts=/-->/g,Ms=/>/g,js=RegExp(">|"+Is+"(?:([^\\s\"'>=/]+)("+Is+"*="+Is+"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),Rs=/'/g,Ns=/"/g,Ls=/^(?:script|style|textarea|title)$/i,Ds=(Bs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),Us=Bs(2),Fs=Symbol.for("lit-noChange"),zs=Symbol.for("lit-nothing"),Hs=new WeakMap,qs=As.createTreeWalker(As,129,null,!1),Ws=(e,t)=>{let r,n=e.length-1,i=[],o=2===t?"<svg>":"",s=ks;for(let t=0;t<n;t++){let n,a,c=e[t],l=-1,u=0;for(;u<c.length&&(s.lastIndex=u,a=s.exec(c),null!==a);)u=s.lastIndex,s===ks?"!--"===a[1]?s=Ts:void 0!==a[1]?s=Ms:void 0!==a[2]?(Ls.test(a[2])&&(r=RegExp("</"+a[2],"g")),s=js):void 0!==a[3]&&(s=js):s===js?">"===a[0]?(s=r??ks,l=-1):void 0===a[1]?l=-2:(l=s.lastIndex-a[2].length,n=a[1],s=void 0===a[3]?js:'"'===a[3]?Ns:Rs):s===Ns||s===Rs?s=js:s===Ts||s===Ms?s=ks:(s=js,r=void 0);let d=s===js&&e[t+1].startsWith("/>")?" ":"";o+=s===ks?c+Es:l>=0?(i.push(n),c.slice(0,l)+ws+c.slice(l)+_s+d):c+_s+(-2===l?(i.push(void 0),t):d)}return[fs(e,o+(e[n]||"<?>")+(2===t?"</svg>":"")),i]},Vs=class e{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0,a=t.length-1,c=this.parts,[l,u]=Ws(t,r);if(this.el=e.createElement(l,n),qs.currentNode=this.el.content,2===r){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=qs.nextNode())&&c.length<a;){if(1===i.nodeType){if(i.hasAttributes()){let e=[];for(let t of i.getAttributeNames())if(t.endsWith(ws)||t.startsWith(_s)){let r=u[s++];if(e.push(t),void 0!==r){let e=i.getAttribute(r.toLowerCase()+ws).split(_s),t=/([.?@])?(.*)/.exec(r);c.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?Zs:"?"===t[1]?Js:"@"===t[1]?Ys:Ks})}else c.push({type:6,index:o})}for(let t of e)i.removeAttribute(t)}if(Ls.test(i.tagName)){let e=i.textContent.split(_s),t=e.length-1;if(t>0){i.textContent=ys?ys.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],Ps()),qs.nextNode(),c.push({type:2,index:++o});i.append(e[t],Ps())}}}else if(8===i.nodeType)if(i.data===xs)c.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(_s,e+1));)c.push({type:7,index:o}),e+=_s.length-1}o++}}static createElement(e,t){let r=As.createElement("template");return r.innerHTML=e,r}},Gs=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:n}=this._$AD,i=(null!==(t=e?.creationScope)&&void 0!==t?t:As).importNode(r,!0);qs.currentNode=i;let o=qs.nextNode(),s=0,a=0,c=n[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new $s(o,o.nextSibling,this,e):1===c.type?t=new c.ctor(o,c.name,c.strings,this,e):6===c.type&&(t=new Xs(o,this,e)),this._$AV.push(t),c=n[++a]}s!==c?.index&&(o=qs.nextNode(),s++)}return qs.currentNode=As,i}v(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},$s=class e{constructor(e,t,r,n){var i;this.type=2,this._$AH=zs,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=null===(i=n?.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=gs(this,e,t),Ss(e)?e===zs||null==e||""===e?(this._$AH!==zs&&this._$AR(),this._$AH=zs):e!==this._$AH&&e!==Fs&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Cs(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==zs&&Ss(this._$AH)?this._$AA.nextSibling.data=e:this.$(As.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=Vs.createElement(fs(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(r);else{let e=new Gs(i,this),t=e.u(this.options);e.v(r),this.$(t),this._$AH=e}}_$AC(e){let t=Hs.get(e.strings);return void 0===t&&Hs.set(e.strings,t=new Vs(e)),t}T(t){Os(this._$AH)||(this._$AH=[],this._$AR());let r,n=this._$AH,i=0;for(let o of t)i===n.length?n.push(r=new e(this.k(Ps()),this.k(Ps()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},Ks=class{constructor(e,t,r,n,i){this.type=1,this._$AH=zs,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=zs}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){let i=this.strings,o=!1;if(void 0===i)e=gs(this,e,t,0),o=!Ss(e)||e!==this._$AH&&e!==Fs,o&&(this._$AH=e);else{let n,s,a=e;for(e=i[0],n=0;n<i.length-1;n++)s=gs(this,a[r+n],t,n),s===Fs&&(s=this._$AH[n]),o||(o=!Ss(s)||s!==this._$AH[n]),s===zs?e=zs:e!==zs&&(e+=(s??"")+i[n+1]),this._$AH[n]=s}o&&!n&&this.j(e)}j(e){e===zs?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Zs=class extends Ks{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===zs?void 0:e}},Qs=ys?ys.emptyScript:"",Js=class extends Ks{constructor(){super(...arguments),this.type=4}j(e){e&&e!==zs?this.element.setAttribute(this.name,Qs):this.element.removeAttribute(this.name)}},Ys=class extends Ks{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=gs(this,e,t,0))&&void 0!==r?r:zs)===Fs)return;let n=this._$AH,i=e===zs&&n!==zs||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==zs&&(n===zs||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}},Xs=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){gs(this,e)}},ea={O:ws,P:_s,A:xs,C:1,M:Ws,L:Gs,R:Cs,D:gs,I:$s,V:Ks,H:Js,N:Ys,U:Zs,F:Xs},ta=bs.litHtmlPolyfillSupport,ta?.(Vs,$s),(null!==(ms=bs.litHtmlVersions)&&void 0!==ms?ms:bs.litHtmlVersions=[]).push("2.8.0"),ra=(e,t,r)=>{var n,i;let o=null!==(n=r?.renderBefore)&&void 0!==n?n:t,s=o._$litPart$;if(void 0===s){let e=null!==(i=r?.renderBefore)&&void 0!==i?i:null;o._$litPart$=s=new $s(t.insertBefore(Ps(),e),e,void 0,r??{})}return s._$AI(e),s}})),la=h((()=>{ps(),ps(),ca(),ca(),(oa=class extends Ho{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ra(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Fs}}).finalized=!0,oa._$litElement$=!0,null===(na=globalThis.litElementHydrateSupport)||void 0===na||na.call(globalThis,{LitElement:oa}),sa=globalThis.litElementPolyfillSupport,sa?.({LitElement:oa}),(null!==(ia=globalThis.litElementVersions)&&void 0!==ia?ia:globalThis.litElementVersions=[]).push("3.3.3")})),ua=h((()=>{})),da=h((()=>{ps(),ca(),la(),ua()})),ha=h((()=>{aa=e=>t=>{return"function"==typeof t?(r=e,n=t,customElements.define(r,n),n):((e,t)=>{let{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.define(e,t)}}})(e,t);var r,n}}));function pa(e){return(t,r)=>void 0!==r?ga(e,t,r):fa(e,t)}var fa,ga,ma=h((()=>{fa=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},ga=(e,t,r)=>{t.constructor.createProperty(r,e)}}));function ba(e){return pa({...e,state:!0})}var ya,va,wa=h((()=>{ma()})),_a=h((()=>{})),xa=h((()=>{_a()})),Ea=h((()=>{_a()})),Aa=h((()=>{_a()})),Pa=h((()=>{_a()})),Sa=h((()=>{_a(),null!=(null===(ya=window.HTMLSlotElement)||void 0===ya?void 0:ya.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE))})),Oa=h((()=>{_a(),Sa()})),Ca=h((()=>{ha(),ma(),wa(),xa(),Ea(),Aa(),Pa(),Sa(),Oa()})),Ia=h((()=>{ca(),va=e=>e??zs})),ka=h((()=>{Ia()}));function Ta(e,t){Na=document.createElement("style"),La=document.createElement("style"),Ba=document.createElement("style"),Na.textContent=Ra(e).core.cssText,La.textContent=Ra(e).dark.cssText,Ba.textContent=Ra(e).light.cssText,document.head.appendChild(Na),document.head.appendChild(La),document.head.appendChild(Ba),Ma(t)}function Ma(e){La&&Ba&&("light"===e?(La.removeAttribute("media"),Ba.media="enabled"):(Ba.removeAttribute("media"),La.media="enabled"))}function ja(e){Na&&La&&Ba&&(Na.textContent=Ra(e).core.cssText,La.textContent=Ra(e).dark.cssText,Ba.textContent=Ra(e).light.cssText)}function Ra(e){return{core:ko`
      :root {
        --w3m-color-mix-strength: ${Io(e?.["--w3m-color-mix-strength"]?e["--w3m-color-mix-strength"]+"%":"0%")};
        --w3m-font-family: ${Io(e?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${Io(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${Io(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${Io(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:ko`
      :root {
        --w3m-color-mix: ${Io(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${Io(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:ko`
      :root {
        --w3m-color-mix: ${Io(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${Io(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}var Na,La,Ba,Da,Ua,Fa,za,Ha,qa,Wa,Va,Ga,$a,Ka,Za,Qa,Ja,Ya,Xa,ec,tc,rc,nc,ic,oc,sc,ac,cc,lc,uc,dc,hc,pc,fc,gc,mc,bc,yc,vc,wc,_c,xc,Ec,Ac,Pc,Sc,Oc,Cc,Ic,kc,Tc,Mc,jc,Rc,Nc,Lc,Bc,Dc,Uc,Fc,zc,Hc,qc,Wc,Vc,Gc,$c,Kc,Zc,Qc,Jc,Yc,Xc,el,tl,rl,nl,il,ol,sl,al,cl,ll,ul,dl,hl,pl,fl,gl,ml,bl,yl,vl,wl,_l,xl,El,Al,Pl,Sl,Ol,Cl,Il,kl,Tl,Ml,jl,Rl,Nl,Ll,Bl,Dl,Ul,Fl,zl,Hl,ql,Wl,Vl,Gl,$l,Kl,Zl,Ql,Jl,Yl,Xl,eu,tu,ru,nu,iu,ou,su,au,cu,lu,uu,du,hu,pu,fu=h((()=>{da(),Da=ko`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
    font-family: var(--wui-font-family);
  }
`,Ua=ko`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Fa=ko`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`})),gu=h((()=>{da(),za=ko`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`})),mu=h((()=>{da(),Ca(),fu(),gu(),Ha=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(qa=class extends oa{render(){return Ds`<slot></slot>`}}).styles=[Da,za],qa=Ha([aa("wui-card")],qa)})),bu=h((()=>{da(),Wa=ko`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`})),yu=h((()=>{da(),Va=Us`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`})),vu=h((()=>{da(),Ga=Us`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`})),wu=h((()=>{da(),$a=Us`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`})),_u=h((()=>{da(),Ka=Us`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`})),xu=h((()=>{da(),Za=Us`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`})),Eu=h((()=>{da(),Qa=Us`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`})),Au=h((()=>{da(),Ja=Us`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`})),Pu=h((()=>{da(),Ya=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`})),Su=h((()=>{da(),Xa=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`})),Ou=h((()=>{da(),ec=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`})),Cu=h((()=>{da(),tc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`})),Iu=h((()=>{da(),rc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`})),ku=h((()=>{da(),nc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`})),Tu=h((()=>{da(),ic=Us`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`})),Mu=h((()=>{da(),oc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`})),ju=h((()=>{da(),sc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`})),Ru=h((()=>{da(),ac=Us` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`})),Nu=h((()=>{da(),cc=Us`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`})),Lu=h((()=>{da(),lc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`})),Bu=h((()=>{da(),uc=Us`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`})),Du=h((()=>{da(),dc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`})),Uu=h((()=>{da(),hc=Us`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`})),Fu=h((()=>{da(),pc=Us`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`})),zu=h((()=>{da(),fc=Us`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`})),Hu=h((()=>{da(),gc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`})),qu=h((()=>{da(),mc=Us`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`})),Wu=h((()=>{da(),bc=Us`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`})),Vu=h((()=>{da(),yc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`})),Gu=h((()=>{da(),vc=Us`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`})),$u=h((()=>{da(),wc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`})),Ku=h((()=>{da(),_c=Us`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`})),Zu=h((()=>{da(),xc=Us`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`})),Qu=h((()=>{da(),Ec=Us`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`})),Ju=h((()=>{da(),Ac=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`})),Yu=h((()=>{da(),Pc=Us`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`})),Xu=h((()=>{da(),Sc=Us`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`})),ed=h((()=>{da(),Oc=Us`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`})),td=h((()=>{da(),Cc=Us`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`})),rd=h((()=>{da(),Ic=Us`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`})),nd=h((()=>{da(),kc=Us`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `})),id=h((()=>{da(),Tc=Us`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`})),od=h((()=>{da(),Mc=Us`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`})),sd=h((()=>{da(),jc=Us`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`})),ad=h((()=>{da(),Rc=Us`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`})),cd=h((()=>{da(),Nc=Us`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`})),ld=h((()=>{da(),Lc=Us`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`})),ud=h((()=>{da(),Bc=Us`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`})),dd=h((()=>{da(),Dc=Us`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`})),hd=h((()=>{da(),Ca(),fu(),bu(),yu(),vu(),wu(),_u(),xu(),Eu(),Au(),Pu(),Su(),Ou(),Cu(),Iu(),ku(),Tu(),Mu(),ju(),Ru(),Nu(),Lu(),Bu(),Du(),Uu(),Fu(),zu(),Hu(),qu(),Wu(),Vu(),Gu(),$u(),Ku(),Zu(),Qu(),Ju(),Yu(),Xu(),ed(),td(),rd(),nd(),id(),od(),sd(),ad(),cd(),ld(),ud(),dd(),Uc=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},Fc={allWallets:Dc,apple:Va,arrowBottom:Ga,arrowLeft:$a,arrowRight:Ka,arrowTop:Za,browser:Qa,checkmark:Ja,chevronBottom:Ya,chevronLeft:Xa,chevronRight:ec,chevronTop:tc,clock:rc,close:nc,compass:oc,coinPlaceholder:ic,copy:sc,cursor:ac,desktop:cc,disconnect:lc,discord:uc,etherscan:dc,extension:hc,externalLink:pc,facebook:fc,filters:gc,github:mc,google:bc,helpCircle:yc,infoCircle:vc,mail:wc,mobile:_c,networkPlaceholder:xc,nftPlaceholder:Ec,off:Ac,qrCode:Pc,refresh:Sc,search:Oc,swapHorizontal:Cc,swapVertical:Ic,telegram:kc,twitch:Tc,twitter:Mc,twitterIcon:jc,wallet:Nc,walletConnect:Lc,walletPlaceholder:Rc,warningCircle:Bc},(zc=class extends oa{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText="\n      --local-color: var(--wui-color-"+this.color+");\n      --local-width: var(--wui-icon-size-"+this.size+");\n    ",Ds`${Fc[this.name]}`}}).styles=[Da,Fa,Wa],Uc([pa()],zc.prototype,"size",void 0),Uc([pa()],zc.prototype,"name",void 0),Uc([pa()],zc.prototype,"color",void 0),zc=Uc([aa("wui-icon")],zc)})),pd=h((()=>{da(),Hc=ko`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`})),fd=h((()=>{da(),Ca(),fu(),pd(),qc=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Wc=class extends oa{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return Ds`<img src=${this.src} alt=${this.alt} />`}}).styles=[Da,Fa,Hc],qc([pa()],Wc.prototype,"src",void 0),qc([pa()],Wc.prototype,"alt",void 0),Wc=qc([aa("wui-image")],Wc)})),gd=h((()=>{da(),Vc=ko`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`})),md=h((()=>{da(),Ca(),fu(),gd(),Gc=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},($c=class extends oa{render(){return Ds`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}}).styles=[Da,Vc],$c=Gc([aa("wui-loading-hexagon")],$c)})),bd=h((()=>{da(),Kc=ko`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`})),yd=h((()=>{da(),Ca(),fu(),bd(),Zc=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Qc=class extends oa{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: var(--wui-color-"+this.color+");",this.dataset.size=this.size,Ds`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}}).styles=[Da,Kc],Zc([pa()],Qc.prototype,"color",void 0),Zc([pa()],Qc.prototype,"size",void 0),Qc=Zc([aa("wui-loading-spinner")],Qc)})),vd=h((()=>{da(),Jc=ko`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`})),wd=h((()=>{da(),Ca(),fu(),vd(),Yc=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Xc=class extends oa{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return Ds`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}}).styles=[Da,Jc],Yc([pa({type:Number})],Xc.prototype,"radius",void 0),Xc=Yc([aa("wui-loading-thumbnail")],Xc)})),_d=h((()=>{da(),el=ko`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`})),xd=h((()=>{da(),Ca(),_d(),tl=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(rl=class extends oa{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText="\n      width: "+this.width+";\n      height: "+this.height+";\n      border-radius: clamp(0px,var(--wui-border-radius-"+this.borderRadius+"), 40px);\n    ",Ds`<slot></slot>`}}).styles=[el],tl([pa()],rl.prototype,"width",void 0),tl([pa()],rl.prototype,"height",void 0),tl([pa()],rl.prototype,"borderRadius",void 0),rl=tl([aa("wui-shimmer")],rl)})),Ed=h((()=>{nl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},il=e=>(...t)=>({_$litDirective$:e,values:t}),ol=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})),Ad=h((()=>{ca(),Ed(),sl=il(class extends ol{constructor(e){var t;if(super(e),e.type!==nl.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(let e in t)t[e]&&(null===(r=this.nt)||void 0===r||!r.has(e))&&this.it.add(e);return this.render(t)}let i=e.element.classList;this.it.forEach((e=>{e in t||(i.remove(e),this.it.delete(e))}));for(let e in t){let r=!!t[e];r===this.it.has(e)||null!==(n=this.nt)&&void 0!==n&&n.has(e)||(r?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return Fs}})})),Pd=h((()=>{Ad()})),Sd=h((()=>{da(),al=ko`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`})),Od=h((()=>{da(),Ca(),Pd(),fu(),Sd(),cl=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(ll=class extends oa{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={["wui-font-"+this.variant]:!0,["wui-color-"+this.color]:!0};return this.style.cssText="\n      --local-align: "+this.align+";\n      --local-color: var(--wui-color-"+this.color+");\n    ",Ds`<slot class=${sl(e)}></slot>`}}).styles=[Da,al],cl([pa()],ll.prototype,"variant",void 0),cl([pa()],ll.prototype,"color",void 0),cl([pa()],ll.prototype,"align",void 0),ll=cl([aa("wui-text")],ll)})),Cd=h((()=>{da(),ul=Us`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `})),Id=h((()=>{da(),dl=Us`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `})),kd=h((()=>{da(),hl=Us`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`})),Td=h((()=>{da(),pl=Us`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `})),Md=h((()=>{da(),fl=Us`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `})),jd=h((()=>{da(),gl=Us`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`})),Rd=h((()=>{da(),ml=Us`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`})),Nd=h((()=>{da(),bl=Us`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `})),Ld=h((()=>{da(),yl=Us`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`})),Bd=h((()=>{da(),vl=Us`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `})),Dd=h((()=>{da(),wl=Us`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`})),Ud=h((()=>{da(),_l=Us`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `})),Fd=h((()=>{da(),xl=Us`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `})),zd=h((()=>{da(),El=ko`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`})),Hd=h((()=>{da(),Ca(),Cd(),Id(),kd(),Td(),Md(),jd(),Rd(),Nd(),Ld(),Bd(),Dd(),Ud(),Fd(),fu(),zd(),Al=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},Pl={browser:ul,dao:dl,defi:hl,defiAlt:pl,eth:fl,layers:gl,lock:ml,login:bl,network:yl,nft:vl,noun:wl,profile:_l,system:xl},(Sl=class extends oa{constructor(){super(...arguments),this.name="browser"}render(){return Ds`${Pl[this.name]}`}}).styles=[Da,El],Al([pa()],Sl.prototype,"name",void 0),Sl=Al([aa("wui-visual")],Sl)})),qd=h((()=>{Ol={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?"var(--wui-spacing-"+e[t]+")":void 0:"string"==typeof e?"var(--wui-spacing-"+e+")":void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:(e,t,r)=>e.length<=t?e:"end"===r?e.substring(0,t)+"...":"start"===r?"..."+e.substring(e.length-t):e.substring(0,Math.floor(t/2))+"..."+e.substring(e.length-Math.floor(t/2)),generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),n=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);n.push("rgb("+t[0]+", "+t[1]+", "+t[2]+")")}return"\n    --local-color-1: "+n[0]+";\n    --local-color-2: "+n[1]+";\n    --local-color-3: "+n[2]+";\n    --local-color-4: "+n[3]+";\n    --local-color-5: "+n[4]+";\n   "},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}})),Wd=h((()=>{da(),Cl=ko`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`})),Vd=h((()=>{da(),Ca(),fu(),qd(),Wd(),Il=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(kl=class extends oa{render(){return this.style.cssText="\n      flex-direction: "+this.flexDirection+";\n      flex-wrap: "+this.flexWrap+";\n      flex-basis: "+this.flexBasis+";\n      flex-grow: "+this.flexGrow+";\n      flex-shrink: "+this.flexShrink+";\n      align-items: "+this.alignItems+";\n      justify-content: "+this.justifyContent+";\n      column-gap: "+(this.columnGap&&"var(--wui-spacing-"+this.columnGap+")")+";\n      row-gap: "+(this.rowGap&&"var(--wui-spacing-"+this.rowGap+")")+";\n      gap: "+(this.gap&&"var(--wui-spacing-"+this.gap+")")+";\n      padding-top: "+(this.padding&&Ol.getSpacingStyles(this.padding,0))+";\n      padding-right: "+(this.padding&&Ol.getSpacingStyles(this.padding,1))+";\n      padding-bottom: "+(this.padding&&Ol.getSpacingStyles(this.padding,2))+";\n      padding-left: "+(this.padding&&Ol.getSpacingStyles(this.padding,3))+";\n      margin-top: "+(this.margin&&Ol.getSpacingStyles(this.margin,0))+";\n      margin-right: "+(this.margin&&Ol.getSpacingStyles(this.margin,1))+";\n      margin-bottom: "+(this.margin&&Ol.getSpacingStyles(this.margin,2))+";\n      margin-left: "+(this.margin&&Ol.getSpacingStyles(this.margin,3))+";\n    ",Ds`<slot></slot>`}}).styles=[Da,Cl],Il([pa()],kl.prototype,"flexDirection",void 0),Il([pa()],kl.prototype,"flexWrap",void 0),Il([pa()],kl.prototype,"flexBasis",void 0),Il([pa()],kl.prototype,"flexGrow",void 0),Il([pa()],kl.prototype,"flexShrink",void 0),Il([pa()],kl.prototype,"alignItems",void 0),Il([pa()],kl.prototype,"justifyContent",void 0),Il([pa()],kl.prototype,"columnGap",void 0),Il([pa()],kl.prototype,"rowGap",void 0),Il([pa()],kl.prototype,"gap",void 0),Il([pa()],kl.prototype,"padding",void 0),Il([pa()],kl.prototype,"margin",void 0),kl=Il([aa("wui-flex")],kl)})),Gd=h((()=>{da(),Tl=ko`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`})),$d=h((()=>{da(),Ca(),fd(),fu(),qd(),Gd(),Ml=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(jl=class extends oa{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return Ds`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",Ds`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=Ol.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}}).styles=[Da,Tl],Ml([pa()],jl.prototype,"imageSrc",void 0),Ml([pa()],jl.prototype,"alt",void 0),Ml([pa()],jl.prototype,"address",void 0),jl=Ml([aa("wui-avatar")],jl)})),Kd=h((()=>{da(),Rl=ko`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`})),Zd=h((()=>{da(),Ca(),hd(),fu(),Kd(),Nl=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Ll=class extends oa{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"sm":e="xs";break;default:e="xxs"}let t="lg"===this.size,r=t?"12%":"16%",n=t?"xxs":"3xl",i="opaque"===this.background,o="accent-100"===this.backgroundColor&&i||"success-100"===this.backgroundColor&&i||"error-100"===this.backgroundColor&&i||"inverse-100"===this.backgroundColor&&i;return this.style.cssText="\n       --local-bg-value: "+(o?"var(--wui-icon-box-bg-"+this.backgroundColor+")":"var(--wui-color-"+this.backgroundColor+")")+";\n       --local-bg-mix: "+(o?"100%":r)+";\n       --local-border-radius: var(--wui-border-radius-"+n+");\n       --local-size: var(--wui-icon-box-size-"+this.size+");\n       --local-border: "+("wui-color-bg-125"===this.borderColor?"2px":"1px")+" solid "+(this.border?"var(--"+this.borderColor+")":"transparent")+"\n   ",Ds` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}}).styles=[Da,Ua,Rl],Nl([pa()],Ll.prototype,"size",void 0),Nl([pa()],Ll.prototype,"backgroundColor",void 0),Nl([pa()],Ll.prototype,"iconColor",void 0),Nl([pa()],Ll.prototype,"background",void 0),Nl([pa({type:Boolean})],Ll.prototype,"border",void 0),Nl([pa()],Ll.prototype,"borderColor",void 0),Nl([pa()],Ll.prototype,"icon",void 0),Ll=Nl([aa("wui-icon-box")],Ll)})),Qd=h((()=>{da(),Bl=ko`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`})),Jd=h((()=>{da(),Ca(),fd(),Od(),Vd(),fu(),qd(),$d(),Zd(),Qd(),ka(),Dl=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Ul=class extends oa{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return Ds`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${va(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Ol.getTruncateString(this.address,8,this.isProfileName?"end":"middle")}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?Ds`<wui-image src=${this.networkSrc}></wui-image>`:Ds`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return Ds`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}}).styles=[Da,Ua,Bl],Dl([pa()],Ul.prototype,"networkSrc",void 0),Dl([pa()],Ul.prototype,"avatarSrc",void 0),Dl([pa()],Ul.prototype,"balance",void 0),Dl([pa({type:Boolean})],Ul.prototype,"disabled",void 0),Dl([pa({type:Boolean})],Ul.prototype,"isProfileName",void 0),Dl([pa()],Ul.prototype,"address",void 0),Ul=Dl([aa("wui-account-button")],Ul)})),Yd=h((()=>{da(),Fl=ko`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`})),Xd=h((()=>{da(),Ca(),hd(),fd(),fu(),Yd(),zl=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Hl=class extends oa{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText="\n       --local-border-radius: var(--wui-border-radius-"+e+");\n       --local-size: var(--wui-wallet-image-size-"+this.size+");\n   ",this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),Ds` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?Ds`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?Ds`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:Ds`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}}).styles=[Da,Fl],zl([pa()],Hl.prototype,"size",void 0),zl([pa()],Hl.prototype,"name",void 0),zl([pa()],Hl.prototype,"imageSrc",void 0),zl([pa()],Hl.prototype,"walletIcon",void 0),Hl=zl([aa("wui-wallet-image")],Hl)})),eh=h((()=>{da(),ql=ko`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`})),th=h((()=>{da(),Ca(),ka(),fu(),Xd(),eh(),Wl=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},4,(Vl=class extends oa{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return Ds`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>Ds`
          <wui-wallet-image
            size="inherit"
            imageSrc=${e}
            name=${va(t)}
          ></wui-wallet-image>
        `))}
    ${e?[...Array(4-this.walletImages.length)].map((()=>Ds` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}`}}).styles=[Da,ql],Wl([pa({type:Array})],Vl.prototype,"walletImages",void 0),Vl=Wl([aa("wui-all-wallets-image")],Vl)})),rh=h((()=>{da(),Gl=ko`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`})),nh=h((()=>{da(),Ca(),hd(),yd(),Od(),fu(),rh(),$l=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Kl=class extends oa{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText="\n    --local-width: "+("fullWidth"===this.variant?"100%":"auto")+";\n    --local-opacity-100: "+(this.loading?0:1)+";\n    --local-opacity-000: "+(this.loading?1:0)+";";let e="md"===this.size?"paragraph-600":"small-600";return Ds`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?Ds`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Ds``}}).styles=[Da,Ua,Gl],$l([pa()],Kl.prototype,"size",void 0),$l([pa({type:Boolean})],Kl.prototype,"disabled",void 0),$l([pa({type:Boolean})],Kl.prototype,"loading",void 0),$l([pa()],Kl.prototype,"variant",void 0),Kl=$l([aa("wui-button")],Kl)})),ih=h((()=>{da(),Zl=Us`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`})),oh=h((()=>{da(),Ql=ko`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`})),sh=h((()=>{da(),Ca(),ih(),xd(),fu(),oh(),Jl=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Yl=class extends oa{constructor(){super(...arguments),this.type="wallet"}render(){return Ds`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?Ds` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Zl}`:Ds`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}}).styles=[Da,Ua,Ql],Jl([pa()],Yl.prototype,"type",void 0),Yl=Jl([aa("wui-card-select-loader")],Yl)})),ah=h((()=>{da(),Xl=Us`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`})),ch=h((()=>{da(),eu=ko`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`})),lh=h((()=>{da(),Ca(),ih(),ah(),hd(),fd(),fu(),ch(),tu=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(ru=class extends oa{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText="\n      --local-stroke: "+(this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)")+";\n      --local-path: "+(e?"var(--wui-path-network-lg)":"var(--wui-path-network)")+";\n      --local-width: "+(e?"86px":"48px")+";\n      --local-height: "+(e?"96px":"54px")+";\n      --local-icon-size: "+(e?"42px":"24px")+";\n    ",Ds`${this.templateVisual()} ${e?Xl:Zl}`}templateVisual(){return this.imageSrc?Ds`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:Ds`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}}).styles=[Da,eu],tu([pa()],ru.prototype,"size",void 0),tu([pa()],ru.prototype,"name",void 0),tu([pa()],ru.prototype,"imageSrc",void 0),tu([pa({type:Boolean})],ru.prototype,"selected",void 0),ru=tu([aa("wui-network-image")],ru)})),uh=h((()=>{da(),nu=ko`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`})),dh=h((()=>{da(),Ca(),ka(),Od(),fu(),lh(),Xd(),uh(),iu=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(ou=class extends oa{constructor(){super(...arguments),this.name="unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return Ds`
      <button data-selected=${va(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?Ds`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${va(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:Ds`
      <wui-wallet-image size="md" imageSrc=${va(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}}).styles=[Da,Ua,nu],iu([pa()],ou.prototype,"name",void 0),iu([pa()],ou.prototype,"type",void 0),iu([pa()],ou.prototype,"imageSrc",void 0),iu([pa({type:Boolean})],ou.prototype,"disabled",void 0),iu([pa({type:Boolean})],ou.prototype,"selected",void 0),ou=iu([aa("wui-card-select")],ou)})),hh=h((()=>{da(),su=ko`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`})),ph=h((()=>{da(),Ca(),hd(),fd(),Od(),fu(),qd(),hh(),au=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(cu=class extends oa{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let e="transparent"===this.variant?"small-600":"paragraph-600";return Ds`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${Ol.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?Ds`<wui-image src=${this.imageSrc}></wui-image>`:null}}).styles=[Da,Ua,su],au([pa()],cu.prototype,"variant",void 0),au([pa()],cu.prototype,"imageSrc",void 0),au([pa({type:Boolean})],cu.prototype,"disabled",void 0),au([pa()],cu.prototype,"icon",void 0),au([pa()],cu.prototype,"href",void 0),cu=au([aa("wui-chip")],cu)})),fh=h((()=>{da(),lu=ko`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`})),gh=h((()=>{da(),Ca(),hd(),yd(),Od(),fu(),fh(),uu=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(du=class extends oa{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return Ds`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?Ds`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}}).styles=[Da,Ua,lu],uu([pa()],du.prototype,"size",void 0),uu([pa({type:Boolean})],du.prototype,"loading",void 0),du=uu([aa("wui-connect-button")],du)})),mh=h((()=>{ca(),({I:hu}=ea),pu=e=>void 0===e.strings}));function bh(e){void 0!==this._$AN?(wh(this),this._$AM=e,_h(this)):this._$AM=e}function yh(e,t=!1,r=0){let n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(n))for(let e=r;e<n.length;e++)vh(n[e],!1),wh(n[e]);else null!=n&&(vh(n,!1),wh(n));else vh(this,e)}var vh,wh,_h,xh,Eh,Ah,Ph,Sh,Oh,Ch,Ih,kh,Th,Mh,jh,Rh,Nh,Lh,Bh,Dh,Uh,Fh,zh,Hh,qh,Wh,Vh,Gh,$h,Kh,Zh,Qh,Jh,Yh,Xh,ep,tp,rp,np,ip,op,sp,ap,cp,lp,up,dp,hp,pp,fp,gp,mp,bp,yp,vp,wp,_p,xp,Ep=h((()=>{mh(),Ed(),Ed(),vh=(e,t)=>{var r,n;let i=e._$AN;if(void 0===i)return!1;for(let e of i)null===(n=(r=e)._$AO)||void 0===n||n.call(r,t,!1),vh(e,t);return!0},wh=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},_h=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),xh(t)}},xh=e=>{var t,r,n,i;e.type==nl.CHILD&&(null!==(t=(n=e)._$AP)&&void 0!==t||(n._$AP=yh),null!==(r=(i=e)._$AQ)&&void 0!==r||(i._$AQ=bh))},Eh=class extends ol{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),_h(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,n;e!==this.isConnected&&(this.isConnected=e,e?null===(r=this.reconnected)||void 0===r||r.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(vh(this,e),wh(this))}setValue(e){if(pu(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})),Ap=h((()=>{ca(),Ep(),Ed(),Ah=()=>new Ph,Ph=class{},Sh=new WeakMap,Oh=il(class extends Eh{render(e){return zs}update(e,[t]){var r;let n=t!==this.G;return n&&void 0!==this.G&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=null===(r=e.options)||void 0===r?void 0:r.host,this.ot(this.lt=e.element)),zs}ot(e){var t;if("function"==typeof this.G){let r=null!==(t=this.dt)&&void 0!==t?t:globalThis,n=Sh.get(r);void 0===n&&(n=new WeakMap,Sh.set(r,n)),void 0!==n.get(this.G)&&this.G.call(this.dt,void 0),n.set(this.G,e),void 0!==e&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,r;return"function"==typeof this.G?null===(t=Sh.get(null!==(e=this.dt)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.G):null===(r=this.G)||void 0===r?void 0:r.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})})),Pp=h((()=>{Ap()})),Sp=h((()=>{da(),Ch=ko`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`})),Op=h((()=>{da(),Ca(),Pp(),hd(),fu(),ka(),Sp(),Ih=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(kh=class extends oa{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=Ah()}render(){let e="wui-size-"+this.size;return Ds` ${this.templateIcon()}
      <input
        ${Oh(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${va(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?Ds`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}}).styles=[Da,Ua,Ch],Ih([pa()],kh.prototype,"size",void 0),Ih([pa()],kh.prototype,"icon",void 0),Ih([pa({type:Boolean})],kh.prototype,"disabled",void 0),Ih([pa()],kh.prototype,"placeholder",void 0),Ih([pa()],kh.prototype,"type",void 0),Ih([pa()],kh.prototype,"keyHint",void 0),kh=Ih([aa("wui-input-text")],kh)})),Cp=h((()=>{da(),Th=ko`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`})),Ip=h((()=>{da(),Ca(),hd(),Od(),fu(),Op(),Cp(),Mh=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(jh=class extends oa{render(){return Ds`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?Ds`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}}).styles=[Da,Th],Mh([pa()],jh.prototype,"errorMessage",void 0),jh=Mh([aa("wui-email-input")],jh)})),kp=h((()=>{da(),Rh=ko`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`})),Tp=h((()=>{da(),Ca(),hd(),fu(),kp(),Nh=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Lh=class extends oa{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return Ds`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}}).styles=[Da,Ua,Fa,Rh],Nh([pa()],Lh.prototype,"size",void 0),Nh([pa({type:Boolean})],Lh.prototype,"disabled",void 0),Nh([pa()],Lh.prototype,"icon",void 0),Nh([pa()],Lh.prototype,"iconColor",void 0),Lh=Nh([aa("wui-icon-link")],Lh)})),Mp=h((()=>{da(),Bh=ko`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`})),jp=h((()=>{da(),Ca(),hd(),fu(),Mp(),Dh=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Uh=class extends oa{constructor(){super(...arguments),this.icon="copy"}render(){return Ds`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}}).styles=[Da,Ua,Bh],Dh([pa()],Uh.prototype,"icon",void 0),Uh=Dh([aa("wui-input-element")],Uh)})),Rp=h((()=>{da(),Fh=ko`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`})),Np=h((()=>{da(),Ca(),fu(),Rp(),zh=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Hh=class extends oa{constructor(){super(...arguments),this.disabled=!1}render(){return Ds`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}}).styles=[Da,Ua,Fh],zh([pa({type:Boolean})],Hh.prototype,"disabled",void 0),Hh=zh([aa("wui-input-numeric")],Hh)})),Lp=h((()=>{da(),qh=ko`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`})),Bp=h((()=>{da(),Ca(),hd(),Od(),fu(),Lp(),Wh=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Vh=class extends oa{constructor(){super(...arguments),this.disabled=!1}render(){return Ds`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}}).styles=[Da,Ua,qh],Wh([pa({type:Boolean})],Vh.prototype,"disabled",void 0),Vh=Wh([aa("wui-link")],Vh)})),Dp=h((()=>{da(),Gh=ko`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`})),Up=h((()=>{da(),Ca(),hd(),fd(),yd(),Od(),Vd(),fu(),Zd(),Dp(),$h=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Kh=class extends oa{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return Ds`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return Ds`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e="blue"===this.iconVariant?"accent-100":"fg-200";return Ds`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size="md"
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?Ds`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Ds``}chevronTemplate(){return this.chevron?Ds`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}}).styles=[Da,Ua,Gh],$h([pa()],Kh.prototype,"icon",void 0),$h([pa()],Kh.prototype,"variant",void 0),$h([pa()],Kh.prototype,"iconVariant",void 0),$h([pa({type:Boolean})],Kh.prototype,"disabled",void 0),$h([pa()],Kh.prototype,"imageSrc",void 0),$h([pa()],Kh.prototype,"alt",void 0),$h([pa({type:Boolean})],Kh.prototype,"chevron",void 0),$h([pa({type:Boolean})],Kh.prototype,"loading",void 0),Kh=$h([aa("wui-list-item")],Kh)})),Fp=h((()=>{da(),Zh=ko`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`})),zp=h((()=>{da(),Ca(),fd(),fu(),Zd(),Fp(),Qh=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},Jh=["withdrawed","buy","cryptoSent","nftSent"],Yh=["deposited","received","bought","minted"],Xh=["minted","bought","nftSent"],ep=["deposited","withdrawed","cryptoSent","buy","received"],(tp=class extends oa{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",t="arrowTop";return Jh.includes(this.type)?(e="accent-100",t="arrowTop"):Yh.includes(this.type)&&Xh.includes(this.type)||Yh.includes(this.type)&&ep.includes(this.type)?(e="success-100",t="arrowBottom"):(e="accent-100",t="swapVertical"),this.dataset.type=this.type,Ds`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?Ds`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:Xh.includes(this.type)?Ds`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:Ds`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}}).styles=[Da,Zh],Qh([pa()],tp.prototype,"type",void 0),Qh([pa()],tp.prototype,"imageSrc",void 0),tp=Qh([aa("wui-transaction-visual")],tp)})),Hp=h((()=>{da(),rp=ko`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`})),qp=h((()=>{da(),Ca(),Od(),fu(),qd(),zp(),Hp(),np=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(ip=class extends oa{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){let e="nftSent"===this.type||"cryptoSent"===this.type?"Sent":this.type,t=Ol.getFormattedDate(this.date);return Ds`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${e}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${t}</wui-text>
      </button>
    `}}).styles=[Da,Ua,rp],np([pa()],ip.prototype,"type",void 0),np([pa({type:Boolean})],ip.prototype,"disabled",void 0),np([pa()],ip.prototype,"imageSrc",void 0),np([pa({attribute:!1})],ip.prototype,"date",void 0),np([pa()],ip.prototype,"transactionDetail",void 0),ip=np([aa("wui-list-transaction")],ip)})),Wp=h((()=>{da(),op=ko`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`})),Vp=h((()=>{da(),Ca(),Od(),fu(),Wp(),sp=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(ap=class extends oa{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,Ds`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}}).styles=[Da,op],sp([pa()],ap.prototype,"variant",void 0),ap=sp([aa("wui-tag")],ap)})),Gp=h((()=>{da(),cp=ko`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`})),$p=h((()=>{da(),Ca(),hd(),Od(),fu(),th(),Vp(),Xd(),Gp(),lp=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(up=class extends oa{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return Ds`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?Ds` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?Ds` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?Ds`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:Ds`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?Ds`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?Ds`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}}).styles=[Da,Ua,cp],lp([pa({type:Array})],up.prototype,"walletImages",void 0),lp([pa()],up.prototype,"imageSrc",void 0),lp([pa()],up.prototype,"name",void 0),lp([pa()],up.prototype,"tagLabel",void 0),lp([pa()],up.prototype,"tagVariant",void 0),lp([pa()],up.prototype,"icon",void 0),lp([pa()],up.prototype,"walletIcon",void 0),lp([pa({type:Boolean})],up.prototype,"disabled",void 0),lp([pa({type:Boolean})],up.prototype,"showAllWallets",void 0),up=lp([aa("wui-list-wallet")],up)})),Kp=h((()=>{da(),dp=ko`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`})),Zp=h((()=>{da(),Ca(),hd(),fu(),Kp(),hp=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(pp=class extends oa{constructor(){super(...arguments),this.logo="google"}render(){return Ds`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}}).styles=[Da,dp],hp([pa()],pp.prototype,"logo",void 0),pp=hp([aa("wui-logo")],pp)})),Qp=h((()=>{da(),fp=ko`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`})),Jp=h((()=>{da(),Ca(),fu(),Zp(),Qp(),gp=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(mp=class extends oa{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return Ds`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}}).styles=[Da,Ua,fp],gp([pa()],mp.prototype,"logo",void 0),gp([pa({type:Boolean})],mp.prototype,"disabled",void 0),mp=gp([aa("wui-logo-select")],mp)})),Yp=h((()=>{da(),bp=ko`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`})),Xp=h((()=>{da(),Ca(),fd(),Od(),fu(),Zd(),Yp(),yp=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(vp=class extends oa{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return Ds`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?Ds`<wui-image src=${this.imageSrc}></wui-image>`:Ds`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}}).styles=[Da,Ua,bp],yp([pa()],vp.prototype,"imageSrc",void 0),yp([pa({type:Boolean})],vp.prototype,"disabled",void 0),vp=yp([aa("wui-network-button")],vp)})),ef=h((()=>{da(),wp=ko`
  :host {
    position: relative;
    display: block;
  }
`})),tf=h((()=>{da(),Ca(),Vd(),fu(),qd(),Np(),Np(),ef(),_p=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(xp=class extends oa{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,t)=>{let r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):n.value=""}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1,r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return Ds`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map(((e,t)=>Ds`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}handleInput(e,t){let r=e.target,n=this.getInputElement(r);if(n){let r=n.value;"insertFromPaste"===e.inputType?this.handlePaste(n,r,t):Ol.isNumber(r)&&e.data?(n.value=e.data,this.focusInputField("next",t)):n.value=""}}handlePaste(e,t,r){let n=t[0];if(n&&Ol.isNumber(n)){e.value=n;let i=t.substring(1);if(r+1<this.length&&i.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}}).styles=[Da,wp],_p([pa({type:Number})],xp.prototype,"length",void 0),xp=_p([aa("wui-otp")],xp)})),rf=p(((e,t)=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}})),nf=p((e=>{var t,r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},e.getSymbolTotalCodewords=function(e){return r[e]},e.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');t=e},e.isKanjiModeEnabled=function(){return typeof t<"u"},e.toSJIS=function(e){return t(e)}})),of=p((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch{return r}}})),sf=p(((e,t)=>{function r(){this.buffer=[],this.length=0}r.prototype={get:function(e){let t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=r})),af=p(((e,t)=>{function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}r.prototype.set=function(e,t,r,n){let i=e*this.size+t;this.data[i]=r,n&&(this.reservedBit[i]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=r})),cf=p((e=>{var t=nf().getSymbolSize;e.getRowColCoords=function(e){if(1===e)return[];let r=Math.floor(e/7)+2,n=t(e),i=145===n?26:2*Math.ceil((n-13)/(2*r-2)),o=[n-7];for(let e=1;e<r-1;e++)o[e]=o[e-1]-i;return o.push(6),o.reverse()},e.getPositions=function(t){let r=[],n=e.getRowColCoords(t),i=n.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)0===e&&0===t||0===e&&t===i-1||e===i-1&&0===t||r.push([n[e],n[t]]);return r}})),lf=p((e=>{var t=nf().getSymbolSize;e.getPositions=function(e){let r=t(e);return[[0,0],[r-7,0],[0,r-7]]}})),uf=p((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t=3,r=3,n=40,i=10;function o(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2==0;case e.Patterns.PATTERN001:return r%2==0;case e.Patterns.PATTERN010:return n%3==0;case e.Patterns.PATTERN011:return(r+n)%3==0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case e.Patterns.PATTERN101:return r*n%2+r*n%3==0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let r=e.size,n=0,i=0,o=0,s=null,a=null;for(let c=0;c<r;c++){i=o=0,s=a=null;for(let l=0;l<r;l++){let r=e.get(c,l);r===s?i++:(i>=5&&(n+=t+(i-5)),s=r,i=1),r=e.get(l,c),r===a?o++:(o>=5&&(n+=t+(o-5)),a=r,o=1)}i>=5&&(n+=t+(i-5)),o>=5&&(n+=t+(o-5))}return n},e.getPenaltyN2=function(e){let t=e.size,n=0;for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){let t=e.get(r,i)+e.get(r,i+1)+e.get(r+1,i)+e.get(r+1,i+1);(4===t||0===t)&&n++}return n*r},e.getPenaltyN3=function(e){let t=e.size,r=0,i=0,o=0;for(let n=0;n<t;n++){i=o=0;for(let s=0;s<t;s++)i=i<<1&2047|e.get(n,s),s>=10&&(1488===i||93===i)&&r++,o=o<<1&2047|e.get(s,n),s>=10&&(1488===o||93===o)&&r++}return r*n},e.getPenaltyN4=function(e){let t=0,r=e.data.length;for(let n=0;n<r;n++)t+=e.data[n];return Math.abs(Math.ceil(100*t/r/5)-10)*i},e.applyMask=function(e,t){let r=t.size;for(let n=0;n<r;n++)for(let i=0;i<r;i++)t.isReserved(i,n)||t.xor(i,n,o(e,i,n))},e.getBestMask=function(t,r){let n=Object.keys(e.Patterns).length,i=0,o=1/0;for(let s=0;s<n;s++){r(s),e.applyMask(s,t);let n=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(s,t),n<o&&(o=n,i=s)}return i}})),df=p((e=>{var t=of(),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,n){switch(n){case t.L:return r[4*(e-1)+0];case t.M:return r[4*(e-1)+1];case t.Q:return r[4*(e-1)+2];case t.H:return r[4*(e-1)+3];default:return}},e.getTotalCodewordsCount=function(e,r){switch(r){case t.L:return n[4*(e-1)+0];case t.M:return n[4*(e-1)+1];case t.Q:return n[4*(e-1)+2];case t.H:return n[4*(e-1)+3];default:return}}})),hf=p((e=>{var t=new Uint8Array(512),r=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)t[n]=e,r[e]=n,e<<=1,256&e&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw new Error("log("+e+")");return r[e]},e.exp=function(e){return t[e]},e.mul=function(e,n){return 0===e||0===n?0:t[r[e]+r[n]]}})),pf=p((e=>{var t=hf();e.mul=function(e,r){let n=new Uint8Array(e.length+r.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<r.length;o++)n[i+o]^=t.mul(e[i],r[o]);return n},e.mod=function(e,r){let n=new Uint8Array(e);for(;n.length-r.length>=0;){let e=n[0];for(let i=0;i<r.length;i++)n[i]^=t.mul(r[i],e);let i=0;for(;i<n.length&&0===n[i];)i++;n=n.slice(i)}return n},e.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let i=0;i<r;i++)n=e.mul(n,new Uint8Array([1,t.exp(i)]));return n}})),ff=p(((e,t)=>{var r=pf();function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let n=r.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(n,i),e}return n},t.exports=n})),gf=p((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),mf=p((e=>{var t="[0-9]+",r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(r=r.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(n,"g"),e.NUMERIC=new RegExp(t,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var i=new RegExp("^"+r+"$"),o=new RegExp("^"+t+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(e){return i.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),bf=p((e=>{var t=gf(),r=mf();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,r){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!t.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?e.ccBits[0]:r<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return r.testNumeric(t)?e.NUMERIC:r.testAlphanumeric(t)?e.ALPHANUMERIC:r.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},e.isValid=function(e){return e&&e.bit&&e.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch{return r}}})),yf=p((e=>{var t=nf(),r=df(),n=of(),i=bf(),o=gf(),s=t.getBCHDigit(7973);function a(e,t){return i.getCharCountIndicator(e,t)+4}function c(e,t){let r=0;return e.forEach((function(e){let n=a(e.mode,t);r+=n+e.getBitsLength()})),r}e.from=function(e,t){return o.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,n,s){if(!o.isValid(e))throw new Error("Invalid QR Code version");typeof s>"u"&&(s=i.BYTE);let c=8*(t.getSymbolTotalCodewords(e)-r.getTotalCodewordsCount(e,n));if(s===i.MIXED)return c;let l=c-a(s,e);switch(s){case i.NUMERIC:return Math.floor(l/10*3);case i.ALPHANUMERIC:return Math.floor(l/11*2);case i.KANJI:return Math.floor(l/13);case i.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,r){let o,s=n.from(r,n.M);if(Array.isArray(t)){if(t.length>1)return function(t,r){for(let n=1;n<=40;n++)if(c(t,n)<=e.getCapacity(n,r,i.MIXED))return n}(t,s);if(0===t.length)return 1;o=t[0]}else o=t;return function(t,r,n){for(let i=1;i<=40;i++)if(r<=e.getCapacity(i,n,t))return i}(o.mode,o.getLength(),s)},e.getEncodedBits=function(e){if(!o.isValid(e)||e<7)throw new Error("Invalid QR Code version");let r=e<<12;for(;t.getBCHDigit(r)-s>=0;)r^=7973<<t.getBCHDigit(r)-s;return e<<12|r}})),vf=p((e=>{var t=nf(),r=t.getBCHDigit(1335);e.getEncodedBits=function(e,n){let i=e.bit<<3|n,o=i<<10;for(;t.getBCHDigit(o)-r>=0;)o^=1335<<t.getBCHDigit(o)-r;return 21522^(i<<10|o)}})),wf=p(((e,t)=>{var r=bf();function n(e){this.mode=r.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r,n;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),n=parseInt(r,10),e.put(n,10);let i=this.data.length-t;i>0&&(r=this.data.substr(t),n=parseInt(r,10),e.put(n,3*i+1))},t.exports=n})),_f=p(((e,t)=>{var r=bf(),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(e){this.mode=r.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},t.exports=i})),xf=p(((e,t)=>{"use strict";t.exports=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319&&r>n+1){var o=e.charCodeAt(n+1);o>=56320&&o<=57343&&(i=1024*(i-55296)+o-56320+65536,n+=1)}i<128?t.push(i):i<2048?(t.push(i>>6|192),t.push(63&i|128)):i<55296||i>=57344&&i<65536?(t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128)):i>=65536&&i<=1114111?(t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}})),Ef=p(((e,t)=>{var r=xf(),n=bf();function i(e){this.mode=n.BYTE,"string"==typeof e&&(e=r(e)),this.data=new Uint8Array(e)}i.getBitsLength=function(e){return 8*e},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},t.exports=i})),Af=p(((e,t)=>{var r=bf(),n=nf();function i(e){this.mode=r.KANJI,this.data=e}i.getBitsLength=function(e){return 13*e},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),e.put(r,13)}},t.exports=i})),Pf=p(((e,t)=>{"use strict";var r={single_source_shortest_paths:function(e,t,n){var i={},o={};o[t]=0;var s,a,c,l,u,d,h,p=r.PriorityQueue.make();for(p.push(t,0);!p.empty();)for(c in a=(s=p.pop()).value,l=s.cost,u=e[a]||{})u.hasOwnProperty(c)&&(d=l+u[c],h=o[c],(typeof o[c]>"u"||h>d)&&(o[c]=d,p.push(c,d),i[c]=a));if(typeof n<"u"&&typeof o[n]>"u"){var f=["Could not find a path from ",t," to ",n,"."].join("");throw new Error(f)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,t,n){var i=r.single_source_shortest_paths(e,t,n);return r.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var t,n=r.PriorityQueue,i={};for(t in e=e||{},n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var r={value:e,cost:t};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};typeof t<"u"&&(t.exports=r)})),Sf=p((e=>{var t=bf(),r=wf(),n=_f(),i=Ef(),o=Af(),s=mf(),a=nf(),c=Pf();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,r){let n,i=[];for(;null!==(n=e.exec(r));)i.push({data:n[0],index:n.index,mode:t,length:n[0].length});return i}function d(e){let r,n,i=u(s.NUMERIC,t.NUMERIC,e),o=u(s.ALPHANUMERIC,t.ALPHANUMERIC,e);return a.isKanjiModeEnabled()?(r=u(s.BYTE,t.BYTE,e),n=u(s.KANJI,t.KANJI,e)):(r=u(s.BYTE_KANJI,t.BYTE,e),n=[]),i.concat(o,r,n).sort((function(e,t){return e.index-t.index})).map((function(e){return{data:e.data,mode:e.mode,length:e.length}}))}function h(e,s){switch(s){case t.NUMERIC:return r.getBitsLength(e);case t.ALPHANUMERIC:return n.getBitsLength(e);case t.KANJI:return o.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e,s){let c,l=t.getBestModeForData(e);if(c=t.from(s,l),c!==t.BYTE&&c.bit<l.bit)throw new Error('"'+e+'" cannot be encoded with mode '+t.toString(c)+".\n Suggested mode is: "+t.toString(l));switch(c===t.KANJI&&!a.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new r(e);case t.ALPHANUMERIC:return new n(e);case t.KANJI:return new o(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce((function(e,t){return"string"==typeof t?e.push(p(t,null)):t.data&&e.push(p(t.data,t.mode)),e}),[])},e.fromString=function(r,n){let i=function(e,r){let n={},i={start:{}},o=["start"];for(let s=0;s<e.length;s++){let a=e[s],c=[];for(let e=0;e<a.length;e++){let l=a[e],u=""+s+e;c.push(u),n[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<o.length;e++){let s=o[e];n[s]&&n[s].node.mode===l.mode?(i[s][u]=h(n[s].lastCount+l.length,l.mode)-h(n[s].lastCount,l.mode),n[s].lastCount+=l.length):(n[s]&&(n[s].lastCount=l.length),i[s][u]=h(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,r))}}o=c}for(let e=0;e<o.length;e++)i[o[e]].end=0;return{map:i,table:n}}(function(e){let r=[];for(let n=0;n<e.length;n++){let i=e[n];switch(i.mode){case t.NUMERIC:r.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:r.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:r.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:r.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return r}(d(r,a.isKanjiModeEnabled())),n),o=c.find_path(i.map,"start","end"),s=[];for(let e=1;e<o.length-1;e++)s.push(i.table[o[e]].node);return e.fromArray(s.reduce((function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)}),[]))},e.rawSplit=function(t){return e.fromArray(d(t,a.isKanjiModeEnabled()))}})),Of=p((e=>{var t=nf(),r=of(),n=sf(),i=af(),o=cf(),s=lf(),a=uf(),c=df(),l=ff(),u=yf(),d=vf(),h=bf(),p=Sf();function f(e,t,r){let n,i,o=e.size,s=d.getEncodedBits(t,r);for(n=0;n<15;n++)i=1==(s>>n&1),n<6?e.set(n,8,i,!0):n<8?e.set(n+1,8,i,!0):e.set(o-15+n,8,i,!0),n<8?e.set(8,o-n-1,i,!0):n<9?e.set(8,15-n-1+1,i,!0):e.set(8,15-n-1,i,!0);e.set(o-8,8,1,!0)}function g(e,r,i){let o=new n;i.forEach((function(t){o.put(t.mode.bit,4),o.put(t.getLength(),h.getCharCountIndicator(t.mode,e)),t.write(o)}));let s=8*(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,r));for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);let a=(s-o.getLengthInBits())/8;for(let e=0;e<a;e++)o.put(e%2?17:236,8);return function(e,r,n){let i=t.getSymbolTotalCodewords(r),o=c.getTotalCodewordsCount(r,n),s=i-o,a=c.getBlocksCount(r,n),u=a-i%a,d=Math.floor(i/a),h=Math.floor(s/a),p=h+1,f=d-h,g=new l(f),m=0,b=new Array(a),y=new Array(a),v=0,w=new Uint8Array(e.buffer);for(let e=0;e<a;e++){let t=e<u?h:p;b[e]=w.slice(m,m+t),y[e]=g.encode(b[e]),m+=t,v=Math.max(v,t)}let _,x,E=new Uint8Array(i),A=0;for(_=0;_<v;_++)for(x=0;x<a;x++)_<b[x].length&&(E[A++]=b[x][_]);for(_=0;_<f;_++)for(x=0;x<a;x++)E[A++]=y[x][_];return E}(o,e,r)}function m(e,r,n,c){let l;if(Array.isArray(e))l=p.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let t=r;if(!t){let r=p.rawSplit(e);t=u.getBestVersionForData(r,n)}l=p.fromString(e,t||40)}}let d=u.getBestVersionForData(l,n);if(!d)throw new Error("The amount of data is too big to be stored in a QR Code");if(r){if(r<d)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+d+".\n")}else r=d;let h=g(r,n,l),m=t.getSymbolSize(r),b=new i(m);return function(e,t){let r=e.size,n=s.getPositions(t);for(let t=0;t<n.length;t++){let i=n[t][0],o=n[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||r<=i+t))for(let n=-1;n<=7;n++)o+n<=-1||r<=o+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(i+t,o+n,!0,!0):e.set(i+t,o+n,!1,!0))}}(b,r),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(b),function(e,t){let r=o.getPositions(t);for(let t=0;t<r.length;t++){let n=r[t][0],i=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(n+t,i+r,!0,!0):e.set(n+t,i+r,!1,!0)}}(b,r),f(b,n,0),r>=7&&function(e,t){let r,n,i,o=e.size,s=u.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),n=t%3+o-8-3,i=1==(s>>t&1),e.set(r,n,i,!0),e.set(n,r,i,!0)}(b,r),function(e,t){let r=e.size,n=-1,i=r-1,o=7,s=0;for(let a=r-1;a>0;a-=2)for(6===a&&a--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,a-r)){let n=!1;s<t.length&&(n=1==(t[s]>>>o&1)),e.set(i,a-r,n),o--,-1===o&&(s++,o=7)}if(i+=n,i<0||r<=i){i-=n,n=-n;break}}}(b,h),isNaN(c)&&(c=a.getBestMask(b,f.bind(null,b,n))),a.applyMask(c,b),f(b,n,c),{modules:b,version:r,errorCorrectionLevel:n,maskPattern:c,segments:l}}e.create=function(e,n){if(typeof e>"u"||""===e)throw new Error("No input text");let i,o,s=r.M;return typeof n<"u"&&(s=r.from(n.errorCorrectionLevel,r.M),i=u.from(n.version),o=a.from(n.maskPattern),n.toSJISFunc&&t.setToSJISFunction(n.toSJISFunc)),m(e,i,s,o)}})),Cf=p((e=>{function t(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map((function(e){return[e,e]})))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}e.getOptions=function(e){e||(e={}),e.color||(e.color={});let r=typeof e.margin>"u"||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:r,color:{dark:t(e.color.dark||"#000000ff"),light:t(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},e.getImageWidth=function(t,r){let n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){let i=r.modules.size,o=r.modules.data,s=e.getScale(i,n),a=Math.floor((i+2*n.margin)*s),c=n.margin*s,l=[n.color.light,n.color.dark];for(let e=0;e<a;e++)for(let r=0;r<a;r++){let u=4*(e*a+r),d=n.color.light;if(e>=c&&r>=c&&e<a-c&&r<a-c){d=l[o[Math.floor((e-c)/s)*i+Math.floor((r-c)/s)]?1:0]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),If=p((e=>{var t=Cf();e.render=function(e,r,n){let i=n,o=r;typeof i>"u"&&(!r||!r.getContext)&&(i=r,r=void 0),r||(o=function(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}()),i=t.getOptions(i);let s=t.getImageWidth(e.modules.size,i),a=o.getContext("2d"),c=a.createImageData(s,s);return t.qrToImageData(c.data,e,i),l=o,u=s,a.clearRect(0,0,l.width,l.height),l.style||(l.style={}),l.height=u,l.width=u,l.style.height=u+"px",l.style.width=u+"px",a.putImageData(c,0,0),o;var l,u},e.renderToDataURL=function(t,r,n){let i=n;typeof i>"u"&&(!r||!r.getContext)&&(i=r,r=void 0),i||(i={});let o=e.render(t,r,i),s=i.type||"image/png",a=i.rendererOpts||{};return o.toDataURL(s,a.quality)}})),kf=p((e=>{var t=Cf();function r(e,t){let r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function n(e,t,r){let n=e+t;return typeof r<"u"&&(n+=" "+r),n}e.render=function(e,i,o){let s=t.getOptions(i),a=e.modules.size,c=e.modules.data,l=a+2*s.margin,u=s.color.light.a?"<path "+r(s.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+r(s.color.dark,"stroke")+' d="'+function(e,t,r){let i="",o=0,s=!1,a=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!s&&(s=!0),e[c]?(a++,c>0&&l>0&&e[c-1]||(i+=s?n("M",l+r,.5+u+r):n("m",o,0),o=0,s=!1),l+1<t&&e[c+1]||(i+=n("h",a),a=0)):o++}return i}(c,a,s.margin)+'"/>',h='viewBox="0 0 '+l+" "+l+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+h+' shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof o&&o(null,p),p}})),Tf=p((e=>{var t=rf(),r=Of(),n=If(),i=kf();function o(e,n,i,o,s){let a=[].slice.call(arguments,1),c=a.length,l="function"==typeof a[c-1];if(!l&&!t())throw new Error("Callback required as last argument");if(!l){if(c<1)throw new Error("Too few arguments provided");return 1===c?(i=n,n=o=void 0):2===c&&!n.getContext&&(o=i,i=n,n=void 0),new Promise((function(t,s){try{let s=r.create(i,o);t(e(s,n,o))}catch(e){s(e)}}))}if(c<2)throw new Error("Too few arguments provided");2===c?(s=i,i=n,n=o=void 0):3===c&&(n.getContext&&typeof s>"u"?(s=o,o=void 0):(s=o,o=i,i=n,n=void 0));try{let t=r.create(i,o);s(null,e(t,n,o))}catch(e){s(e)}}e.create=r.create,e.toCanvas=o.bind(null,n.render),e.toDataURL=o.bind(null,n.renderToDataURL),e.toString=o.bind(null,(function(e,t,r){return i.render(e,r)}))}));function Mf(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+Rf}var jf,Rf,Nf,Lf,Bf,Df,Uf,Ff,zf,Hf,qf,Wf,Vf,Gf,$f,Kf,Zf,Qf,Jf,Yf,Xf,eg,tg,rg,ng,ig,og,sg=h((()=>{da(),jf=b(Tf(),1),Rf=.1,2.5,7,Nf={generate(e,t,r){let n="#141414",i=[],o=function(e,t){let r=Array.prototype.slice.call(jf.default.create(e,{errorCorrectionLevel:t}).modules.data,0),n=Math.sqrt(r.length);return r.reduce(((e,t,r)=>(r%n==0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e,"Q"),s=t/o.length,a=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];a.forEach((({x:e,y:t})=>{let r=(o.length-7)*s*e,c=(o.length-7)*s*t,l=.45;for(let e=0;e<a.length;e+=1){let t=s*(7-2*e);i.push(Us`
            <rect
              fill=${2===e?n:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*l:t*l}
              ry= ${0===e?(t-5)*l:t*l}
              stroke=${n}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+s*e+2.5:c+s*e}
              y= ${0===e?r+s*e+2.5:r+s*e}
            />
          `)}}));let c=Math.floor((r+25)/s),l=o.length/2-c/2,u=o.length/2+c/2-1,d=[];o.forEach(((e,t)=>{e.forEach(((e,r)=>{if(o[t][r]&&!(t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8)&&!(t>l&&t<u&&r>l&&r<u)){let e=t*s+s/2,n=r*s+s/2;d.push([e,n])}}))}));let h={};return d.forEach((([e,t])=>{h[e]?h[e]?.push(t):h[e]=[t]})),Object.entries(h).map((([e,t])=>{let r=t.filter((e=>t.every((t=>!Mf(e,t,s)))));return[Number(e),r]})).forEach((([e,t])=>{t.forEach((t=>{i.push(Us`<circle cx=${e} cy=${t} fill=${n} r=${s/2.5} />`)}))})),Object.entries(h).filter((([e,t])=>t.length>1)).map((([e,t])=>{let r=t.filter((e=>t.some((t=>Mf(e,t,s)))));return[Number(e),r]})).map((([e,t])=>{t.sort(((e,t)=>e<t?-1:1));let r=[];for(let e of t){let t=r.find((t=>t.some((t=>Mf(e,t,s)))));t?t.push(e):r.push([e])}return[e,r.map((e=>[e[0],e[e.length-1]]))]})).forEach((([e,t])=>{t.forEach((([t,r])=>{i.push(Us`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${s/1.25}
                stroke-linecap="round"
              />
            `)}))})),i}}})),ag=h((()=>{da(),Lf=ko`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.2);
  }
`})),cg=h((()=>{da(),Ca(),hd(),fd(),sg(),fu(),ag(),Bf=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Df=class extends oa{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText="--local-size: "+this.size+"px",Ds`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return Us`
      <svg height=${e} width=${e}>
        ${Nf.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?Ds`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:Ds`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}}).styles=[Da,Lf],Bf([pa()],Df.prototype,"uri",void 0),Bf([pa({type:Number})],Df.prototype,"size",void 0),Bf([pa()],Df.prototype,"theme",void 0),Bf([pa()],Df.prototype,"imageSrc",void 0),Bf([pa()],Df.prototype,"alt",void 0),Df=Bf([aa("wui-qr-code")],Df)})),lg=h((()=>{da(),Uf=ko`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`})),ug=h((()=>{da(),Ca(),Pp(),jp(),fu(),Op(),lg(),Ff=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(zf=class extends oa{constructor(){super(...arguments),this.inputComponentRef=Ah()}render(){return Ds`
      <wui-input-text
        ${Oh(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value?.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}}).styles=[Da,Uf],zf=Ff([aa("wui-search-bar")],zf)})),dg=h((()=>{da(),Hf=ko`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`})),hg=h((()=>{da(),Ca(),Od(),fu(),Zd(),dg(),qf=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Wf=class extends oa{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return Ds`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}}).styles=[Da,Hf],qf([pa()],Wf.prototype,"backgroundColor",void 0),qf([pa()],Wf.prototype,"iconColor",void 0),qf([pa()],Wf.prototype,"icon",void 0),qf([pa()],Wf.prototype,"message",void 0),Wf=qf([aa("wui-snackbar")],Wf)})),pg=h((()=>{da(),Vf=ko`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`})),fg=h((()=>{da(),Ca(),fu(),pg(),Gf=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},($f=class extends oa{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText="\n      --local-tab: "+this.activeTab+";\n      --local-tab-width: "+this.localTabWidth+";\n    ",this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{let r=t===this.activeTab;return Ds`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],n=this.buttons[e],i=r?.querySelector("wui-text"),o=n?.querySelector("wui-text"),s=n?.getBoundingClientRect(),a=o?.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&s&&a&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=Math.round(s.width+a.width)+6+"px",n.animate([{width:s.width+a.width+"px"}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:250,delay:t?0:50,fill:"forwards",easing:"ease"}))}}).styles=[Da,Ua,Vf],Gf([pa({type:Array})],$f.prototype,"tabs",void 0),Gf([pa()],$f.prototype,"onTabChange",void 0),Gf([pa({type:Array})],$f.prototype,"buttons",void 0),Gf([pa({type:Boolean})],$f.prototype,"disabled",void 0),Gf([ba()],$f.prototype,"activeTab",void 0),Gf([ba()],$f.prototype,"localTabWidth",void 0),Gf([ba()],$f.prototype,"isDense",void 0),$f=Gf([aa("wui-tabs")],$f)})),gg=h((()=>{da(),Kf=ko`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`})),mg=h((()=>{da(),Ca(),hd(),Od(),fu(),gg(),Zf=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Qf=class extends oa{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return Ds`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}}).styles=[Da,Ua,Kf],Zf([pa()],Qf.prototype,"placement",void 0),Zf([pa()],Qf.prototype,"message",void 0),Qf=Zf([aa("wui-tooltip")],Qf)})),bg=h((()=>{da(),Jf=ko`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`})),yg=h((()=>{da(),Ca(),fu(),qd(),bg(),Yf=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(Xf=class extends oa{render(){return this.style.cssText="\n      grid-template-rows: "+this.gridTemplateRows+";\n      grid-template-columns: "+this.gridTemplateColumns+";\n      justify-items: "+this.justifyItems+";\n      align-items: "+this.alignItems+";\n      justify-content: "+this.justifyContent+";\n      align-content: "+this.alignContent+";\n      column-gap: "+(this.columnGap&&"var(--wui-spacing-"+this.columnGap+")")+";\n      row-gap: "+(this.rowGap&&"var(--wui-spacing-"+this.rowGap+")")+";\n      gap: "+(this.gap&&"var(--wui-spacing-"+this.gap+")")+";\n      padding-top: "+(this.padding&&Ol.getSpacingStyles(this.padding,0))+";\n      padding-right: "+(this.padding&&Ol.getSpacingStyles(this.padding,1))+";\n      padding-bottom: "+(this.padding&&Ol.getSpacingStyles(this.padding,2))+";\n      padding-left: "+(this.padding&&Ol.getSpacingStyles(this.padding,3))+";\n      margin-top: "+(this.margin&&Ol.getSpacingStyles(this.margin,0))+";\n      margin-right: "+(this.margin&&Ol.getSpacingStyles(this.margin,1))+";\n      margin-bottom: "+(this.margin&&Ol.getSpacingStyles(this.margin,2))+";\n      margin-left: "+(this.margin&&Ol.getSpacingStyles(this.margin,3))+";\n    ",Ds`<slot></slot>`}}).styles=[Da,Jf],Yf([pa()],Xf.prototype,"gridTemplateRows",void 0),Yf([pa()],Xf.prototype,"gridTemplateColumns",void 0),Yf([pa()],Xf.prototype,"justifyItems",void 0),Yf([pa()],Xf.prototype,"alignItems",void 0),Yf([pa()],Xf.prototype,"justifyContent",void 0),Yf([pa()],Xf.prototype,"alignContent",void 0),Yf([pa()],Xf.prototype,"columnGap",void 0),Yf([pa()],Xf.prototype,"rowGap",void 0),Yf([pa()],Xf.prototype,"gap",void 0),Yf([pa()],Xf.prototype,"padding",void 0),Yf([pa()],Xf.prototype,"margin",void 0),Xf=Yf([aa("wui-grid")],Xf)})),vg=h((()=>{da(),eg=ko`
  :host {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--wui-cover);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    :host {
      align-items: flex-start;
    }

    ::slotted(wui-card) {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }
`})),wg=h((()=>{da(),Ca(),fu(),vg(),tg=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(rg=class extends oa{render(){return Ds`<slot></slot>`}}).styles=[Da,eg],rg=tg([aa("wui-overlay")],rg)})),_g=h((()=>{da(),ng=ko`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`})),xg=h((()=>{da(),Ca(),Od(),fu(),_g(),ig=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},(og=class extends oa{constructor(){super(...arguments),this.text=""}render(){return Ds`${this.template()}`}template(){return this.text?Ds`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}}).styles=[Da,ng],ig([pa()],og.prototype,"text",void 0),og=ig([aa("wui-separator")],og)})),Eg={};f(Eg,{UiHelperUtil:()=>Ol,WuiAccountButton:()=>Ul,WuiAllWalletsImage:()=>Vl,WuiAvatar:()=>jl,WuiButton:()=>Kl,WuiCard:()=>qa,WuiCardSelect:()=>ou,WuiCardSelectLoader:()=>Yl,WuiChip:()=>cu,WuiConnectButton:()=>du,WuiEmailInput:()=>jh,WuiFlex:()=>kl,WuiGrid:()=>Xf,WuiIcon:()=>zc,WuiIconBox:()=>Ll,WuiIconLink:()=>Lh,WuiImage:()=>Wc,WuiInputElement:()=>Uh,WuiInputNumeric:()=>Hh,WuiInputText:()=>kh,WuiLink:()=>Vh,WuiListItem:()=>Kh,WuiListTransaction:()=>ip,WuiListWallet:()=>up,WuiLoadingHexagon:()=>$c,WuiLoadingSpinner:()=>Qc,WuiLoadingThumbnail:()=>Xc,WuiLogo:()=>pp,WuiLogoSelect:()=>mp,WuiNetworkButton:()=>vp,WuiNetworkImage:()=>ru,WuiOtp:()=>xp,WuiOverlay:()=>rg,WuiQrCode:()=>Df,WuiSearchBar:()=>zf,WuiSeparator:()=>og,WuiShimmer:()=>rl,WuiSnackbar:()=>Wf,WuiTabs:()=>$f,WuiTag:()=>ap,WuiText:()=>ll,WuiTooltip:()=>Qf,WuiTransactionVisual:()=>tp,WuiVisual:()=>Sl,WuiWalletImage:()=>Hl,initializeTheming:()=>Ta,setColorTheme:()=>Ma,setThemeVariables:()=>ja});var Ag,Pg=h((()=>{mu(),hd(),fd(),md(),yd(),wd(),xd(),Od(),Hd(),Jd(),th(),$d(),nh(),sh(),dh(),ph(),gh(),Ip(),Zd(),Tp(),jp(),Np(),Op(),Bp(),Up(),qp(),$p(),Jp(),Zp(),Xp(),lh(),tf(),cg(),ug(),hg(),fg(),Vp(),mg(),zp(),Xd(),Vd(),yg(),wg(),xg(),fu(),qd()})),Sg=h((()=>{da(),Ag=ko`
  :host {
    z-index: var(--w3m-z-index);
    position: relative;
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  @media (max-width: 430px) {
    wui-overlay {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`})),Og={};f(Og,{W3mModal:()=>kg});var Cg,Ig,kg,Tg=h((()=>{ds(),Pg(),da(),Ca(),Sg(),Cg=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},Ig="scroll-lock",(kg=class extends oa{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=fo.state.open,this.initializeTheming(),lo.prefetch(),this.unsubscribe.push(fo.subscribeKey("open",(e=>e?this.onOpen():this.onClose())))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?Ds`
          <wui-overlay @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-overlay>
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${va(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${va(e)}
        avatarSrc=${va(this.profileImage)}
        balance=${t?Gi.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){fo.open()}};Q1([pa({type:Boolean})],J1.prototype,"disabled",void 0),Q1([pa()],J1.prototype,"balance",void 0),Q1([ba()],J1.prototype,"address",void 0),Q1([ba()],J1.prototype,"balanceVal",void 0),Q1([ba()],J1.prototype,"balanceSymbol",void 0),Q1([ba()],J1.prototype,"profileName",void 0),Q1([ba()],J1.prototype,"profileImage",void 0),Q1([ba()],J1.prototype,"network",void 0),J1=Q1([aa("w3m-account-button")],J1),ds(),da(),Ca(),ka();var Y1=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},X1=class extends oa{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Ki.state.isConnected,this.unsubscribe.push(Ki.subscribeKey("isConnected",(e=>{this.isAccount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount?Ds`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${va(this.balance)}
          >
          </w3m-account-button>
        `:Ds`
          <w3m-connect-button
            size=${va(this.size)}
            label=${va(this.label)}
            loadingLabel=${va(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Y1([pa({type:Boolean})],X1.prototype,"disabled",void 0),Y1([pa()],X1.prototype,"balance",void 0),Y1([pa()],X1.prototype,"size",void 0),Y1([pa()],X1.prototype,"label",void 0),Y1([pa()],X1.prototype,"loadingLabel",void 0),Y1([ba()],X1.prototype,"isAccount",void 0),X1=Y1([aa("w3m-button")],X1),ds(),da(),Ca(),ka();var e2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},t2=class extends oa{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=fo.state.open,this.unsubscribe.push(fo.subscribeKey("open",(e=>this.open=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ds`
      <wui-connect-button
        size=${va(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?fo.close():fo.open()}};e2([pa()],t2.prototype,"size",void 0),e2([pa()],t2.prototype,"label",void 0),e2([pa()],t2.prototype,"loadingLabel",void 0),e2([ba()],t2.prototype,"open",void 0),t2=e2([aa("w3m-connect-button")],t2),Tg(),ds(),da(),Ca(),ka();var r2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n2=class extends oa{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.networkImages=eo.state.networkImages,this.network=io.state.caipNetwork,this.connected=Ki.state.isConnected,this.unsubscribe.push(io.subscribeKey("caipNetwork",(e=>this.network=e)),Ki.subscribeKey("isConnected",(e=>this.connected=e)),eo.subscribeNetworkImages((e=>this.networkImages={...e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){let e=this.networkImages[this.network?.imageId??""];return Ds`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${va(e)}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){fo.open({view:"Networks"})}};r2([pa({type:Boolean})],n2.prototype,"disabled",void 0),r2([ba()],n2.prototype,"networkImages",void 0),r2([ba()],n2.prototype,"network",void 0),r2([ba()],n2.prototype,"connected",void 0),n2=r2([aa("w3m-network-button")],n2),ds(),da(),Ca(),da();var i2=ko`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,o2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s2=class extends oa{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=ho.state.view,this.unsubscribe.push(ho.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([e])=>{let t=e?.contentRect.height+"px";"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return Ds`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return Ds`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return Ds`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return Ds`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return Ds`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return Ds`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return Ds`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return Ds`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return Ds`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return Ds`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return Ds`<w3m-get-wallet-view></w3m-get-wallet-view>`}}async onViewChange(e){let{history:t}=ho.state,r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:"translateX("+r+"px)"}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:"translateX("+n+"px)"},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};s2.styles=i2,o2([ba()],s2.prototype,"view",void 0),s2=o2([aa("w3m-router")],s2),ds(),Pg(),da(),Ca(),ka(),da();var a2=ko`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,c2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},l2=class extends oa{constructor(){super(),this.usubscribe=[],this.networkImages=eo.state.networkImages,this.address=Ki.state.address,this.profileImage=Ki.state.profileImage,this.profileName=Ki.state.profileName,this.balance=Ki.state.balance,this.balanceSymbol=Ki.state.balanceSymbol,this.network=io.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Ki.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):fo.close()})),io.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");let e=this.networkImages[this.network?.imageId??""];return Ds`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${va(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Ol.getTruncateString(this.profileName,20,"end"):Ol.getTruncateString(this.address,8,"middle")}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${Gi.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>
            <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
              <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
              Block Explorer
              <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
            </wui-button>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${va(e)}
          ?chevron=${this.isMultiNetwork()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}isMultiNetwork(){let{requestedCaipNetworks:e}=io.state;return!!e&&e.length>1}onCopyAddress(){try{this.address&&(Gi.copyToClopboard(this.address),yo.showSuccess("Address copied"))}catch{yo.showError("Failed to copy")}}onNetworks(){this.isMultiNetwork()&&ho.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await mo.disconnect(),fo.close()}catch{yo.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=Ki.state;e&&Gi.openHref(e,"_blank")}};l2.styles=a2,c2([ba()],l2.prototype,"address",void 0),c2([ba()],l2.prototype,"profileImage",void 0),c2([ba()],l2.prototype,"profileName",void 0),c2([ba()],l2.prototype,"balance",void 0),c2([ba()],l2.prototype,"balanceSymbol",void 0),c2([ba()],l2.prototype,"network",void 0),c2([ba()],l2.prototype,"disconecting",void 0),l2=c2([aa("w3m-account-view")],l2),ds(),da(),Ca();var u2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},d2=class extends oa{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=Gi.debounce((e=>{this.search=e}))}render(){let e=this.search.length>=2;return Ds`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?Ds`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:Ds`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return Gi.isMobile()?Ds`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){ho.push("ConnectingWalletConnect")}};u2([ba()],d2.prototype,"search",void 0),d2=u2([aa("w3m-all-wallets-view")],d2),ds(),da(),Ca(),ka(),da();var h2=ko`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,p2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},f2=class extends oa{constructor(){super(),this.unsubscribe=[],this.connectors=ro.state.connectors,this.unsubscribe.push(ro.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ds`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(Gi.isMobile())return null;let e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?Ds`
      <wui-list-wallet
        imageSrc=${va(Eo.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=so.state;return e?.length?this.filterOutRecentWallets(e).map((e=>Ds`
        <wui-list-wallet
          imageSrc=${va(Eo.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>ho.push("ConnectingWalletConnect",{wallet:e})}
        >
        </wui-list-wallet>
      `)):null}featuredTemplate(){let{featured:e}=lo.state;return e.length?this.filterOutRecentWallets(e).map((e=>Ds`
        <wui-list-wallet
          imageSrc=${va(Eo.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>ho.push("ConnectingWalletConnect",{wallet:e})}
        >
        </wui-list-wallet>
      `)):null}recentTemplate(){return Yi.getRecentWallets().map((e=>Ds`
        <wui-list-wallet
          imageSrc=${va(Eo.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>ho.push("ConnectingWalletConnect",{wallet:e})}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}connectorsTemplate(){return this.connectors.map((e=>{if("WALLET_CONNECT"===e.type)return null;let t,r;if("INJECTED"===e.type){if(!mo.checkInjectedInstalled())return null;t="installed",r="success"}return Ds`
        <wui-list-wallet
          imageSrc=${va(Eo.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel=${va(t)}
          tagVariant=${va(r)}
        >
        </wui-list-wallet>
      `}))}allWalletsTemplate(){return Ds`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${()=>ho.push("AllWallets")}
        tagLabel=${lo.state.count+"+"}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:e,featured:t}=lo.state,{customWallets:r}=so.state;if(!e.length||t.length||r?.length)return null;let[n,i]=this.filterOutRecentWallets(e);return[n,i].map((e=>Ds`
        <wui-list-wallet
          imageSrc=${va(Eo.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>ho.push("ConnectingWalletConnect",{wallet:e})}
        >
        </wui-list-wallet>
      `))}onConnector(e){"WALLET_CONNECT"===e.type?Gi.isMobile()?ho.push("AllWallets"):ho.push("ConnectingWalletConnect"):ho.push("ConnectingExternal",{connector:e})}filterOutRecentWallets(e){let t=Yi.getRecentWallets().map((e=>e.id));return e.filter((e=>!t.includes(e.id)))}};f2.styles=h2,p2([ba()],f2.prototype,"connectors",void 0),f2=p2([aa("w3m-connect-view")],f2),ds(),Ca(),ds(),da(),Ca(),ka(),da();var g2=ko`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-button {
    display: none;
  }

  [data-retry='true'] wui-button {
    display: block;
    opacity: 1;
  }
`,m2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},b2=class extends oa{constructor(){super(),this.wallet=ho.state.data?.wallet,this.connector=ho.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Eo.getWalletImage(this.wallet)??Eo.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=mo.state.wcUri,this.error=mo.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.onRetry=void 0,this.unsubscribe.push(mo.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),mo.subscribeKey("wcError",(e=>this.error=e)),mo.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t="Continue in "+this.name;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),Ds`
      <wui-flex
        data-error=${va(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${va(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?Ds`
            <wui-flex .padding=${["0","xl","xl","xl"]}>
              <wui-button variant="fullWidth" @click=${this.onCopyUri}>
                <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-button>
            </wui-flex>
          `:null}
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button").animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){this.buffering||(mo.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=wo.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return Ds`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(Gi.copyToClopboard(this.uri),yo.showSuccess("Link copied"))}catch{yo.showError("Failed to copy")}}};b2.styles=g2,m2([ba()],b2.prototype,"uri",void 0),m2([ba()],b2.prototype,"error",void 0),m2([ba()],b2.prototype,"ready",void 0),m2([ba()],b2.prototype,"showRetry",void 0),m2([ba()],b2.prototype,"buffering",void 0),m2([pa()],b2.prototype,"onRetry",void 0);var y2=class extends b2{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await mo.connectExternal(this.connector.id),fo.close())}catch{this.error=!0}}};y2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-connecting-external-view")],y2),ds(),da(),Ca();var v2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},w2=class extends oa{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=ho.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Vi.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),Ds`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):Ds`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=mo.state;(e||Gi.isPairingExpired(t))&&(mo.connectWalletConnect(),await mo.state.wcPromise,this.storeWalletConnectDeeplink(),fo.close())}catch{mo.setWcError(!0),Gi.isAllowedRetry(this.lastRetry)&&(yo.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}storeWalletConnectDeeplink(){let{wcLinking:e,recentWallet:t}=mo.state;e&&Yi.setWalletConnectDeepLink(e),t&&Yi.setWeb3ModalRecent(t)}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{connectors:e}=ro.state,{mobile_link:t,desktop_link:r,webapp_link:n,injected:i}=this.wallet,o=i?.map((({injected_id:e})=>e)).filter(Boolean)??[],s=o.length,a=t,c=n,l=e.find((e=>"INJECTED"===e.type)),u=mo.checkInjectedInstalled(o),d=s&&u&&l,h=r&&!Gi.isMobile();d&&this.platforms.push("injected"),a&&this.platforms.push(Gi.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!d&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"injected":return Ds`<w3m-connecting-wc-injected></w3m-connecting-wc-injected>`;case"desktop":return Ds`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return Ds`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return Ds`
          <w3m-connecting-wc-mobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return Ds`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return Ds`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?Ds`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};v2([ba()],w2.prototype,"platform",void 0),v2([ba()],w2.prototype,"platforms",void 0),w2=v2([aa("w3m-connecting-wc-view")],w2),ds(),da(),Ca(),ka();var _2=class extends oa{render(){return Ds`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{Gi.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=lo.state,{customWallets:r}=so.state;return[...t,...r??[],...e].slice(0,4).map((e=>Ds`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${va(Eo.getWalletImage(e))}
          @click=${()=>{Gi.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};_2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-get-wallet-view")],_2),ds(),da(),Ca(),ka(),da();var x2=ko`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,E2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},A2=class extends oa{constructor(){super(),this.network=ho.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=io.state.caipNetwork,this.unsubscribe.push(io.subscribeKey("caipNetwork",(e=>{e?.id!==this.currentNetwork?.id&&ho.goBack()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return Ds`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${va(Eo.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:Ds`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button").animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&await io.switchActiveNetwork(this.network)}catch{this.error=!0}}};A2.styles=x2,E2([ba()],A2.prototype,"showRetry",void 0),E2([ba()],A2.prototype,"error",void 0),E2([ba()],A2.prototype,"currentNetwork",void 0),A2=E2([aa("w3m-network-switch-view")],A2),ds(),da(),Ca(),ka();var P2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},S2=class extends oa{constructor(){super(),this.unsubscribe=[],this.caipNetwork=io.state.caipNetwork,this.unsubscribe.push(io.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ds`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${()=>ho.push("WhatIsANetwork")}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=io.state,n=e,i=t;return n?.length&&i?.sort(((e,t)=>n.indexOf(t.id)-n.indexOf(e.id))),i?.map((e=>Ds`
        <wui-card-select
          .selected=${this.caipNetwork?.id===e.id}
          imageSrc=${va(Eo.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!r&&!n?.includes(e.id)}
        ></wui-card-select>
      `))}async onSwitchNetwork(e){let{isConnected:t}=Ki.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=io.state;t&&i?.id!==e.id?r?.includes(e.id)?await io.switchActiveNetwork(e):n&&ho.push("SwitchNetwork",{network:e}):t||(io.setCaipNetwork(e),ho.push("Connect"))}};P2([ba()],S2.prototype,"caipNetwork",void 0),S2=P2([aa("w3m-networks-view")],S2),ds(),da(),Ca();var O2=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],C2=class extends oa{render(){return Ds`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${O2}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{Gi.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};C2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-what-is-a-network-view")],C2),ds(),da(),Ca();var I2=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],k2=class extends oa{render(){return Ds`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${I2}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${()=>ho.push("GetWallet")}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}};k2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-what-is-a-wallet-view")],k2),ds(),da(),Ca(),ka(),da();var T2=ko`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,M2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},j2="local-paginator",R2=class extends oa{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!lo.state.wallets.length,this.wallets=lo.state.wallets,this.recommended=lo.state.recommended,this.featured=lo.state.featured,this.unsubscribe.push(lo.subscribeKey("wallets",(e=>this.wallets=e)),lo.subscribeKey("recommended",(e=>this.recommended=e)),lo.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return Ds`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await lo.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>Ds`
        <wui-card-select-loader type="wallet" id=${va(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map((e=>Ds`
        <wui-card-select
          imageSrc=${va(Eo.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:n}=lo.state,i=window.innerWidth<352?3:4,o=e.length+t.length,s=Math.ceil(o/i)*i-o+i;return s-=e.length?r.length%i:0,0===n||[...r,...e,...t].length<n?this.shimmerTemplate(s,j2):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector("#"+j2);e&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=lo.state;r.length<t&&lo.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=ro.state,r=t.find((({explorerId:t})=>t===e.id));r?ho.push("ConnectingExternal",{connector:r}):ho.push("ConnectingWalletConnect",{wallet:e})}};R2.styles=T2,M2([ba()],R2.prototype,"initial",void 0),M2([ba()],R2.prototype,"wallets",void 0),M2([ba()],R2.prototype,"recommended",void 0),M2([ba()],R2.prototype,"featured",void 0),R2=M2([aa("w3m-all-wallets-list")],R2),ds(),da(),Ca(),ka(),da();var N2=ko`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,L2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},B2=class extends oa{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?Ds`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await lo.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=lo.state;return e.length?Ds`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map((e=>Ds`
            <wui-card-select
              imageSrc=${va(Eo.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:Ds`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=ro.state,r=t.find((({explorerId:t})=>t===e.id));r?ho.push("ConnectingExternal",{connector:r}):ho.push("ConnectingWalletConnect",{wallet:e})}};B2.styles=N2,L2([ba()],B2.prototype,"loading",void 0),L2([pa()],B2.prototype,"query",void 0),B2=L2([aa("w3m-all-wallets-search")],B2),ds(),da(),Ca();var D2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},U2=class extends oa{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(mo.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){let e=this.generateTabs();return Ds`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map((e=>"injected"===e?{label:"Browser",icon:"extension",platform:"injected"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};D2([pa({type:Array})],U2.prototype,"platforms",void 0),D2([pa()],U2.prototype,"onSelectPlatfrom",void 0),D2([ba()],U2.prototype,"buffering",void 0),U2=D2([aa("w3m-connecting-header")],U2),ds(),Ca();var F2=class extends b2{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this)}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{this.onConnect?.()}),250))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=Gi.formatNativeUrl(e,this.uri);mo.setWcLinking({name:t,href:n}),mo.setRecentWallet(this.wallet),Gi.openHref(r,"_self")}catch{this.error=!0}}};F2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-connecting-wc-desktop")],F2),ds(),Ca();var z2=class extends b2{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-injected: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this)}async onConnectProxy(){try{this.error=!1,await mo.connectExternal("injected"),fo.close()}catch{this.error=!0}}};z2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-connecting-wc-injected")],z2),ds(),Ca();var H2=class extends b2{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=Gi.formatNativeUrl(e,this.uri);mo.setWcLinking({name:t,href:n}),mo.setRecentWallet(this.wallet),Gi.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=Gi.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(mo.setBuffering(!0),setTimeout((()=>{mo.setBuffering(!1)}),5e3))}};H2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-connecting-wc-mobile")],H2),ds(),da(),Ca(),ka(),da();var q2=ko`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,W2=class extends b2{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),Ds`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-button variant="fullWidth" @click=${this.onCopyUri}>
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-button>
      </wui-flex>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),250))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return mo.setWcLinking(void 0),mo.setRecentWallet(this.wallet),Ds`<wui-qr-code
      size=${e}
      theme=${wo.state.themeMode}
      uri=${this.uri}
      imageSrc=${va(Eo.getWalletImage(this.wallet))}
      alt=${va(t)}
    ></wui-qr-code>`}};W2.styles=q2,W2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-connecting-wc-qrcode")],W2),ds(),da(),Ca(),ka();var V2=class extends oa{constructor(){super(...arguments),this.wallet=ho.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");return Ds`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${va(Eo.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-flex flexDirection="column" alignItems="center" gap="xxs">
          <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
          <wui-text variant="small-500" color="fg-200" align="center">
            Download and install ${this.wallet.name} to continue
          </wui-text>
        </wui-flex>

        ${this.downloadBtnTemplate()}
      </wui-flex>
    `}downloadBtnTemplate(){if(!this.wallet)throw new Error("w3m-connecting-wc-unsupported:onDownload No wallet provided");let{homepage:e}=this.wallet;return e?Ds`
      <wui-button
        size="sm"
        variant="fill"
        @click=${()=>Gi.openHref(e,"_blank")}
      >
        <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        Download
      </wui-button>
    `:null}};V2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-connecting-wc-unsupported")],V2),ds(),Ca();var G2=class extends b2{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink"}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=Gi.formatUniversalUrl(e,this.uri);mo.setWcLinking({name:t,href:n}),mo.setRecentWallet(this.wallet),Gi.openHref(r,"_blank")}catch{this.error=!0}}};G2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-connecting-wc-web")],G2),ds(),da(),Ca(),da();var $2=ko`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,K2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};function Z2(){let e=ho.state.data?.connector?.name,t=ho.state.data?.wallet?.name,r=ho.state.data?.network?.name,n=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet"}}var Q2=class extends oa{constructor(){super(),this.unsubscribe=[],this.heading=Z2()[ho.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(ho.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),mo.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Ds`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${fo.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}titleTemplate(){return Ds`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=ho.state,t="Connect"===e;return this.showBack?Ds`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${ho.goBack}
      ></wui-icon-link>`:Ds`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${()=>ho.push("WhatIsAWallet")}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?Ds`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=Z2()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=ho.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Q2.styles=[$2],K2([ba()],Q2.prototype,"heading",void 0),K2([ba()],Q2.prototype,"buffering",void 0),K2([ba()],Q2.prototype,"showBack",void 0),Q2=K2([aa("w3m-header")],Q2),da(),Ca();var J2=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},Y2=class extends oa{constructor(){super(...arguments),this.data=[]}render(){return Ds`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>Ds`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>Ds`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};J2([pa({type:Array})],Y2.prototype,"data",void 0),Y2=J2([aa("w3m-help-widget")],Y2),ds(),da(),Ca(),da();var X2=ko`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`,e5=class extends oa{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=so.state;return e||t?Ds`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=so.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=so.state;return e?Ds`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=so.state;return e?Ds`<a href=${e}>Privacy Policy</a>`:null}};e5.styles=[X2],e5=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([aa("w3m-legal-footer")],e5),ds(),da(),Ca(),da();var t5=ko`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,r5=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n5={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},i5=class extends oa{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=yo.state.open,this.unsubscribe.push(yo.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){let{message:e,variant:t}=yo.state,r=n5[t];return Ds`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>yo.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};i5.styles=t5,r5([ba()],i5.prototype,"open",void 0),i5=r5([aa("w3m-snackbar")],i5),ds(),Pg();var o5=!1,s5=class{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{Ki.setIsConnected(e)},this.setCaipAddress=e=>{Ki.setCaipAddress(e)},this.setBalance=(e,t)=>{Ki.setBalance(e,t)},this.setProfileName=e=>{Ki.setProfileName(e)},this.setProfileImage=e=>{Ki.setProfileImage(e)},this.resetAccount=()=>{Ki.resetAccount()},this.setCaipNetwork=e=>{io.setCaipNetwork(e)},this.getCaipNetwork=()=>io.state.caipNetwork,this.setRequestedCaipNetworks=e=>{io.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>io.getApprovedCaipNetworksData(),this.resetNetwork=()=>{io.resetNetwork()},this.setConnectors=e=>{ro.setConnectors(e)},this.resetWcConnection=()=>{mo.resetWcConnection()},this.fetchIdentity=e=>xo.fetchIdentity(e),this.setAddressExplorerUrl=e=>{Ki.setAddressExplorerUrl(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),fo.open(e)}async close(){await this.initOrContinue(),fo.close()}getThemeMode(){return wo.state.themeMode}getThemeVariables(){return wo.state.themeVariables}setThemeMode(e){wo.setThemeMode(e),Ma(wo.state.themeMode)}setThemeVariables(e){wo.setThemeVariables(e),ja(wo.state.themeVariables)}subscribeTheme(e){return wo.subscribe(e)}initControllers(e){io.setClient(e.networkControllerClient),io.setDefaultCaipNetwork(e.defaultChain),so.setProjectId(e.projectId),so.setIncludeWalletIds(e.includeWalletIds),so.setExcludeWalletIds(e.excludeWalletIds),so.setFeaturedWalletIds(e.featuredWalletIds),so.setTokens(e.tokens),so.setTermsConditionsUrl(e.termsConditionsUrl),so.setPrivacyPolicyUrl(e.privacyPolicyUrl),so.setCustomWallets(e.customWallets),mo.setClient(e.connectionControllerClient),lo.setSdkVersion(e._sdkVersion),e.themeMode&&wo.setThemeMode(e.themeMode),e.themeVariables&&wo.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!o5&&Gi.isClient()&&(o5=!0,this.initPromise=new Promise((async e=>{await Promise.all([Promise.resolve().then((()=>(Pg(),Eg))),Promise.resolve().then((()=>(Tg(),Og)))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()}))),this.initPromise}},a5="walletConnect",c5="injected",l5="coinbaseWallet",u5="safe",d5="ledger",h5="eip155",p5="3.0.0-beta.2",f5={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},g5={[l5]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[u5]:"461db637-8616-43ce-035a-d89b8a1d5800",[d5]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[a5]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[c5]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},m5={[l5]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[u5]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[d5]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},b5={[c5]:"Browser Wallet",[a5]:"WalletConnect",[l5]:"Coinbase",[d5]:"Ledger",[u5]:"Safe"},y5={[c5]:"INJECTED",[a5]:"WALLET_CONNECT"};function v5(e){if(e)return{id:h5+":"+e.id,name:e.name,imageId:f5[e.id]}}function w5(e){if(!e)return;let t={};return Object.entries(e).forEach((([e,r])=>{t[h5+":"+e]=r})),t}var _5=class extends s5{constructor(e){let{wagmiConfig:t,chains:r,defaultChain:n,_sdkVersion:i,tokens:o,...s}=e;if(!t)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!s.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!t.connectors.find((e=>e.id===a5)))throw new Error("web3modal:constructor - WalletConnectConnector is required");super({networkControllerClient:{switchCaipNetwork:async e=>{let t=this.caipNetworkIdToNumber(e?.id);t&&await async function({chainId:e}){let{connector:t}=F1();if(!t)throw new VJ;if(!t.switchChain)throw new A1({connector:t});return t.switchChain(e)}({chainId:t})},async getApprovedCaipNetworksData(){if(localStorage.getItem("wagmi.wallet")?.includes(a5)){let e=t.connectors.find((e=>e.id===a5));if(!e)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let r=(await e.getProvider()).signer?.session?.namespaces,n=r?.[h5]?.methods,i=r?.[h5]?.chains;return{supportsAllNetworks:n?.includes("wallet_addEthereumChain"),approvedCaipNetworkIds:i}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:{connectWalletConnect:async e=>{let r=t.connectors.find((e=>e.id===a5));if(!r)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");r.on("message",(t=>{"display_uri"===t.type&&(e(t.data),r.removeAllListeners())}));let n=this.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await z1({connector:r,chainId:n})},connectExternal:async e=>{let r=t.connectors.find((t=>t.id===e));if(!r)throw new Error("connectionControllerClient:connectExternal - connector is undefined");let n=this.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await z1({connector:r,chainId:n})},checkInjectedInstalled:e=>!!window?.ethereum&&(e?e.some((e=>!!window.ethereum?.[String(e)])):!!window.ethereum),disconnect:H1},defaultChain:v5(n),tokens:w5(o),_sdkVersion:i??"html-wagmi-"+p5,...s}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(r),this.syncConnectors(t.connectors),Z1((()=>this.syncAccount())),function(e,{selector:t=(e=>e)}={}){F1().subscribe((({data:e,chains:r})=>t({chainId:e?.chain?.id,chains:r})),(()=>e(K1())),{equalityFn:s0})}((()=>this.syncNetwork()))}syncRequestedNetworks(e){let t=e?.map((e=>({id:h5+":"+e.id,name:e.name,imageId:f5[e.id]})));this.setRequestedCaipNetworks(t??[])}async syncAccount(){let{address:e,isConnected:t}=$1(),{chain:r}=K1();if(this.resetAccount(),t&&e&&r){let n=h5+":"+r.id+":"+e;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t}=$1(),{chain:r}=K1();if(r){let n=String(r.id),i=h5+":"+n;if(this.setCaipNetwork({id:i,name:r.name,imageId:f5[r.id]}),t&&e){let t=h5+":"+r.id+":"+e;if(this.setCaipAddress(t),r.blockExplorers?.default?.url){let t=r.blockExplorers.default.url+"/address/"+e;this.setAddressExplorerUrl(t)}this.hasSyncedConnectedAccount&&await this.syncBalance(e,r)}}}async syncProfile(e){try{let{name:t,avatar:r}=await this.fetchIdentity({caipChainId:h5+":"+FJ.id,address:e});this.setProfileName(t),this.setProfileImage(r)}catch{let t=await async function({address:e,chainId:t}){return V1({chainId:t}).getEnsName({address:Kr(e)})}({address:e,chainId:FJ.id});if(t){this.setProfileName(t);let e=await async function({name:e,chainId:t}){return await V1({chainId:t}).getEnsAvatar({name:(r=e,g1(r))});var r}({name:t,chainId:FJ.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=await async function({address:e,chainId:t,formatUnits:r,token:n}){let i=F1(),o=V1({chainId:t});if(n){let i=async({abi:i})=>{let o={abi:i,address:n,chainId:t},[s,a,c]=await G1({allowFailure:!1,contracts:[{...o,functionName:"balanceOf",args:[e]},{...o,functionName:"decimals"},{...o,functionName:"symbol"}]});return{decimals:a,formatted:Oe(s??"0",O1(r??a)),symbol:c,value:s}};try{return await i({abi:q1})}catch(e){if(e instanceof an){let{symbol:e,...t}=await i({abi:W1});return{symbol:pe(H(e,{dir:"right"})),...t}}throw e}}let s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:e}),c=s.find((e=>e.id===o.chain.id));return{decimals:c?.nativeCurrency.decimals??18,formatted:Oe(a??"0",O1(r??18)),symbol:c?.nativeCurrency.symbol??"ETH",value:a}}({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){let t=e.map((({id:e,name:t})=>({id:e,explorerId:m5[e],imageId:g5[e],name:b5[e]??t,type:y5[e]??"EXTERNAL"})));this.setConnectors(t??[])}caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0}},x5=b(Rg(),1);typeof window<"u"&&(window.Buffer||(window.Buffer=x5.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var E5,A5;E5=new WeakMap,A5=new WeakMap,LT();var P5,S5,O5,C5,I5,k5,T5,M5,j5,R5,N5,L5,B5,D5,U5,F5,z5,H5,q5,W5,V5,G5,$5,K5="eip155",Z5="requestedChains",Q5="wallet_addEthereumChain";function J5(){return e=this,t=void 0,n=function(){var e;return function(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(t){return e="ledgerConnectKit",[2,new Promise((function(t,r){var n="ledger-ck-script-".concat(e);if(typeof document<"u")if(document.getElementById(n))t(window[e]);else{var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/@ledgerhq/connect-kit@1",i.id=n,i.addEventListener("load",(function(){t(window[e])})),i.addEventListener("error",(function(e){r(e.error)})),document.head.appendChild(i)}else r("Connect Kit does not support server side")}))]}))},new((r=void 0)||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}));var e,t,r,n}P5=new WeakMap,S5=new WeakMap,O5=new WeakSet,C5=async function(){return!ZJ(this,S5)&&typeof window<"u"&&JJ(this,S5,YJ(this,I5,k5).call(this)),ZJ(this,S5)},I5=new WeakSet,k5=async function(){let{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:r}=await Promise.resolve().then((()=>(IV(),uV))),[n,...i]=this.chains.map((({id:e})=>e));if(n){let{projectId:o,showQrModal:s=!0,qrModalOptions:a,metadata:c,relayUrl:l}=this.options;JJ(this,P5,await e.init({showQrModal:s,qrModalOptions:a,projectId:o,optionalMethods:r,optionalEvents:t,chains:[n],optionalChains:i.length?i:void 0,rpcMap:Object.fromEntries(this.chains.map((e=>[e.id,e.rpcUrls.default.http[0]]))),metadata:c,relayUrl:l}))}},T5=new WeakSet,M5=function(){if(YJ(this,q5,W5).call(this).includes(Q5)||!this.options.isNewChainsStale)return!1;let e=YJ(this,U5,F5).call(this),t=this.chains.map((({id:e})=>e)),r=YJ(this,z5,H5).call(this);return!(r.length&&!r.some((e=>t.includes(e))))&&!t.every((t=>e.includes(t)))},j5=new WeakSet,R5=function(){ZJ(this,P5)&&(YJ(this,N5,L5).call(this),ZJ(this,P5).on("accountsChanged",this.onAccountsChanged),ZJ(this,P5).on("chainChanged",this.onChainChanged),ZJ(this,P5).on("disconnect",this.onDisconnect),ZJ(this,P5).on("session_delete",this.onDisconnect),ZJ(this,P5).on("display_uri",this.onDisplayUri),ZJ(this,P5).on("connect",this.onConnect))},N5=new WeakSet,L5=function(){ZJ(this,P5)&&(ZJ(this,P5).removeListener("accountsChanged",this.onAccountsChanged),ZJ(this,P5).removeListener("chainChanged",this.onChainChanged),ZJ(this,P5).removeListener("disconnect",this.onDisconnect),ZJ(this,P5).removeListener("session_delete",this.onDisconnect),ZJ(this,P5).removeListener("display_uri",this.onDisplayUri),ZJ(this,P5).removeListener("connect",this.onConnect))},B5=new WeakSet,D5=function(e){this.storage?.setItem(Z5,e)},U5=new WeakSet,F5=function(){return this.storage?.getItem(Z5)??[]},z5=new WeakSet,H5=function(){if(!ZJ(this,P5))return[];let e=ZJ(this,P5).session?.namespaces;return e?bk(e)[K5]?.chains?.map((e=>parseInt(e.split(":")[1]||"")))??[]:[]},q5=new WeakSet,W5=function(){if(!ZJ(this,P5))return[];let e=ZJ(this,P5).session?.namespaces;return e?bk(e)[K5]?.methods??[]:[]},"function"==typeof SuppressedError&&SuppressedError,($5=V5||(V5={})).LedgerConnect="LedgerConnect",$5.WalletConnect="WalletConnect",(G5||(G5={})).Ethereum="Ethereum";var Y5,X5,e3,t3,r3,n3,i3,o3,s3,a3,c3;Y5=new WeakMap,X5=new WeakMap,e3=new WeakMap,t3=new WeakSet,r3=async function(){return!ZJ(this,X5)&&typeof window<"u"&&JJ(this,X5,YJ(this,n3,i3).call(this)),ZJ(this,X5)},n3=new WeakSet,i3=async function(){let e,t=await J5();if(this.options.enableDebugLogs&&t.enableDebugLogs(),ZJ(this,e3)){let{chainId:t,bridge:r}=this.options;e={providerType:G5.Ethereum,walletConnectVersion:1,chainId:t,bridge:r,rpc:Object.fromEntries(this.chains.map((e=>[e.id,e.rpcUrls.default.http[0]])))}}else{let{projectId:t,requiredChains:r,requiredMethods:n,optionalMethods:i,requiredEvents:o,optionalEvents:s}=this.options,a=this.chains.map((({id:e})=>e));e={providerType:G5.Ethereum,walletConnectVersion:2,projectId:t,chains:r,optionalChains:a,methods:n,optionalMethods:i,events:o,optionalEvents:s,rpcMap:Object.fromEntries(this.chains.map((e=>[e.id,e.rpcUrls.default.http[0]])))}}t.checkSupport(e),JJ(this,Y5,await t.getProvider())},o3=new WeakSet,s3=function(){ZJ(this,Y5)&&(YJ(this,a3,c3).call(this),ZJ(this,Y5).on("accountsChanged",this.onAccountsChanged),ZJ(this,Y5).on("chainChanged",this.onChainChanged),ZJ(this,Y5).on("disconnect",this.onDisconnect),ZJ(this,Y5).on("session_delete",this.onDisconnect),ZJ(this,Y5).on("connect",this.onConnect))},a3=new WeakSet,c3=function(){ZJ(this,Y5)&&(ZJ(this,Y5).removeListener("accountsChanged",this.onAccountsChanged),ZJ(this,Y5).removeListener("chainChanged",this.onChainChanged),ZJ(this,Y5).removeListener("disconnect",this.onDisconnect),ZJ(this,Y5).removeListener("session_delete",this.onDisconnect),ZJ(this,Y5).removeListener("connect",this.onConnect))};var l3,u3,d3=b(MV(),1),h3=b(dJ(),1);l3=new WeakMap,u3=new WeakMap,window.createWeb3Modal=function(e){return new _5({...e,_sdkVersion:"html-wagmi-"+p5})},window.walletConnectProvider=function({projectId:e}){return function(t){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(t.id))return null;let r="https://rpc.walletconnect.com/v1/?chainId="+h5+":"+t.id+"&projectId="+e;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}},window.configureChains=function(e,t,{batch:r={multicall:{wait:32}},pollingInterval:n=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!e.length)throw new Error("must have at least one chain");let c=[],l={},u={};for(let r of e){let e=!1;for(let n of t){let t=n(r);t&&(e=!0,c.some((({id:e})=>e===r.id))||(c=[...c,t.chain]),l[r.id]=[...l[r.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[r.id]=[...u[r.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw new Error(['Could not find valid provider configuration for chain "'+r.name+'".\n',"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join("\n"))}return{chains:c,publicClient:({chainId:t})=>{let u=c.find((e=>e.id===t))??e[0],d=l[u.id];if(!d||!d[0])throw new Error('No providers configured for chain "'+u.id+'"');let h=WX({batch:r,chain:u,transport:QY(d.map((e=>function(e,t={}){let{batch:r,fetchOptions:n,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=t;return({chain:a,retryCount:c,timeout:l})=>{let{batchSize:u=1e3,wait:d=0}="object"==typeof r?r:{},h=t.retryCount??c,p=l??t.timeout??1e4,f=e||a?.rpcUrls.default.http[0];if(!f)throw new JY;return KY({key:i,name:o,async request({method:t,params:i}){let o={method:t,params:i},{schedule:s}=si({id:""+e,wait:d,shouldSplitBatch:e=>e.length>u,fn:e=>rX.http(f,{body:e,fetchOptions:n,timeout:p})}),[{error:a,result:c}]=await(async e=>r?s(e):[await rX.http(f,{body:e,fetchOptions:n,timeout:p})])(o);if(a)throw new pn({body:o,error:a,url:f});return c},retryCount:h,retryDelay:s,timeout:p,type:"http"},{url:e})}}(e,{timeout:a}))),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:n});return Object.assign(h,{chains:c})},webSocketPublicClient:({chainId:t})=>{let l=c.find((e=>e.id===t))??e[0],d=u[l.id];if(!d||!d[0])return;let h=WX({batch:r,chain:l,transport:QY(d.map((e=>function(e,t={}){let{key:r="webSocket",name:n="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:o,retryCount:s,timeout:a})=>{let c=t.retryCount??s,l=a??t.timeout??1e4,u=e||o?.rpcUrls.default.webSocket?.[0];if(!u)throw new JY;return KY({key:r,name:n,async request({method:e,params:t}){let r={method:e,params:t},n=await tX(u),{error:i,result:o}=await rX.webSocketAsync(n,{body:r,timeout:l});if(i)throw new pn({body:r,error:i,url:u});return o},retryCount:c,retryDelay:i,timeout:l,type:"webSocket"},{getSocket:()=>tX(u),async subscribe({params:e,onData:t,onError:r}){let n=await tX(u),{result:i}=await new Promise(((i,o)=>rX.webSocket(n,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error)return o(e.error),void r?.(e.error);"number"!=typeof e.id?"eth_subscription"===e.method&&t(e.params):i(e)}})));return{subscriptionId:i,unsubscribe:async()=>new Promise((e=>rX.webSocket(n,{body:{method:"eth_unsubscribe",params:[i]},onResponse:e})))}}})}}(e,{timeout:a}))),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:n});return Object.assign(h,{chains:c})}}},window.createConfig=function(e){let t=new U1(e);return B1=t,t},window.InjectedConnector=KX,window.CoinbaseWalletConnector=class extends XJ{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,QJ(this,E5,void 0),QJ(this,A5,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:Kr(e[0])})},this.onChainChanged=e=>{let t=GJ(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{let t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let r=Kr((await t.enable())[0]),n=await this.getChainId(),i=this.isChainUnsupported(n);return e&&n!==e&&(n=(await this.switchChain(e)).id,i=this.isChainUnsupported(n)),{account:r,chain:{id:n,unsupported:i}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new In(e):e}}async disconnect(){if(!ZJ(this,A5))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){return Kr((await(await this.getProvider()).request({method:"eth_accounts"}))[0])}async getChainId(){return GJ((await this.getProvider()).chainId)}async getProvider(){if(!ZJ(this,A5)){let e=(await Promise.resolve().then((()=>b(OP(),1)))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),JJ(this,E5,new e(this.options));let t=ZJ(this,E5).walletExtension?.getChainId(),r=this.chains.find((e=>this.options.chainId?e.id===this.options.chainId:e.id===t))||this.chains[0],n=this.options.chainId||r?.id,i=this.options.jsonRpcUrl||r?.rpcUrls.default.http[0];JJ(this,A5,ZJ(this,E5).makeWeb3Provider(i,n))}return ZJ(this,A5)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return GX({account:r,chain:n,transport:ZY(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){let t=await this.getProvider(),r=X(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find((t=>t.id===e))??{id:e,name:"Chain "+r,network:""+r,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(n){let i=this.chains.find((t=>t.id===e));if(!i)throw new WJ({chainId:e,connectorId:this.id});if(4902===n.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(e){throw new In(e)}throw new Rn(n)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:n}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:n}}})}},window.WalletConnectConnector=class extends XJ{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),QJ(this,O5),QJ(this,I5),QJ(this,T5),QJ(this,j5),QJ(this,N5),QJ(this,B5),QJ(this,U5),QJ(this,z5),QJ(this,q5),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,QJ(this,P5,void 0),QJ(this,S5,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:Kr(e[0])})},this.onChainChanged=e=>{let t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{YJ(this,B5,D5).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},YJ(this,O5,C5).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){let e=this.storage?.getItem("store")?.state?.data?.chain?.id;r=e&&!this.isChainUnsupported(e)?e:this.chains[0]?.id}if(!r)throw new Error("No chains found on connector.");let n=await this.getProvider();YJ(this,j5,R5).call(this);let i=YJ(this,T5,M5).call(this);if(n.session&&i&&await n.disconnect(),!n.session||i){let e=this.chains.filter((e=>e.id!==r)).map((e=>e.id));this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:t,chains:[r],optionalChains:e.length?e:void 0}),YJ(this,B5,D5).call(this,this.chains.map((({id:e})=>e)))}let o=Kr((await n.enable())[0]),s=await this.getChainId();return{account:o,chain:{id:s,unsupported:this.isChainUnsupported(s)}}}catch(e){throw/user rejected/i.test(e?.message)?new In(e):e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{YJ(this,N5,L5).call(this),YJ(this,B5,D5).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return Kr(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return ZJ(this,P5)||await YJ(this,O5,C5).call(this),e&&await this.switchChain(e),ZJ(this,P5)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return GX({account:r,chain:n,transport:ZY(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=YJ(this,T5,M5).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find((t=>t.id===e));if(!t)throw new Rn(new Error("chain not found on connector."));try{let r=await this.getProvider(),n=YJ(this,z5,H5).call(this),i=YJ(this,q5,W5).call(this);if(!n.includes(e)&&i.includes(Q5)){await r.request({method:Q5,params:[{chainId:X(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let n=YJ(this,U5,F5).call(this);n.push(e),YJ(this,B5,D5).call(this,n)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:X(e)}]}),t}catch(e){throw/user rejected request/i.test("string"==typeof e?e:e?.message)?new In(e):new Rn(e)}}},window.LedgerConnector=class extends XJ{constructor(e){super({...e,options:{...e.options}}),QJ(this,t3),QJ(this,n3),QJ(this,o3),QJ(this,a3),this.id="ledger",this.name="Ledger",this.ready=!0,QJ(this,Y5,void 0),QJ(this,X5,void 0),QJ(this,e3,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:Kr(e[0])})},this.onChainChanged=e=>{let t=GJ(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")},this.onConnect=()=>{this.emit("connect",{})},JJ(this,e3,1===this.walletConnectVersion)}get walletConnectVersion(){return this.options.walletConnectVersion?this.options.walletConnectVersion:this.options.projectId?2:1}async connect({chainId:e}={}){try{let t=await this.getProvider({create:!0});YJ(this,o3,s3).call(this),t.session||(this.emit("message",{type:"connecting"}),await t.request({method:"eth_requestAccounts"}));let r=await this.getAccount(),n=await this.getChainId(),i=this.isChainUnsupported(n);return e&&n!==e&&(n=(await this.switchChain(e)).id,i=this.isChainUnsupported(n)),{account:r,chain:{id:n,unsupported:i},provider:t}}catch(e){throw/user rejected/i.test(e?.message)?new In(e):e}}async disconnect(){let e=await this.getProvider();try{e?.disconnect&&await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{YJ(this,a3,c3).call(this),ZJ(this,e3)&&typeof localStorage<"u"&&localStorage.removeItem("walletconnect")}}async getAccount(){return Kr((await(await this.getProvider()).request({method:"eth_accounts"}))[0])}async getChainId(){return GJ(await(await this.getProvider()).request({method:"eth_chainId"}))}async getProvider({chainId:e,create:t}={create:!1}){return(!ZJ(this,Y5)||ZJ(this,e3)&&t)&&await YJ(this,t3,r3).call(this),e&&await this.switchChain(e),ZJ(this,Y5)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return GX({account:r,chain:n,transport:ZY(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){let t=this.chains.find((t=>t.id===e));if(!t)throw new Rn(new Error("chain not found on connector."));try{return await(await this.getProvider()).request({method:"wallet_switchEthereumChain",params:[{chainId:X(e)}]}),t}catch(e){throw/user rejected request/i.test("string"==typeof e?e:e?.message)?new In(e):new Rn(e)}}},window.SafeConnector=class extends XJ{constructor({chains:e,options:t}){let r={shimDisconnect:!1,...t};super({chains:e,options:r}),this.id="safe",this.name="Safe",this.ready=!(typeof window>"u")&&window?.parent!==window,QJ(this,l3,void 0),QJ(this,u3,void 0),this.shimDisconnectKey=this.id+".shimDisconnect";let n=h3.default;"function"!=typeof h3.default&&"function"==typeof h3.default.default&&(n=h3.default.default),JJ(this,u3,new n(r))}async connect(){let e=await this.getProvider();if(!e)throw new VJ;e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let t=await this.getAccount(),r=await this.getChainId();return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:t,chain:{id:r,unsupported:this.isChainUnsupported(r)}}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new VJ;return Kr((await e.request({method:"eth_accounts"}))[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new VJ;return GJ(e.chainId)}async getProvider(){if(!ZJ(this,l3)){let e=await ZJ(this,u3).safe.getInfo();if(!e)throw new Error("Could not load Safe information");JJ(this,l3,new d3.SafeAppProvider(e,ZJ(this,u3)))}return ZJ(this,l3)}async getWalletClient({chainId:e}={}){let t=await this.getProvider(),r=await this.getAccount(),n=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return GX({account:r,chain:n,transport:ZY(t)})}async isAuthorized(){try{return!(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))&&!!await this.getAccount()}catch{return!1}}onAccountsChanged(e){}onChainChanged(e){}onDisconnect(){this.emit("disconnect")}},window.watchAccount=Z1,window.walletConnectDisconnect=H1,window.getAccount=$1,window.chains={mainnet:FJ,arbitrum:hJ,avalanche:fJ,bsc:SJ,celo:BJ,aurora:pJ,gnosis:UJ,optimism:zJ,polygon:HJ,zkSync:qJ,base:PJ}})();
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@walletconnect/universal-provider/dist/index.es.js:
  (**
  * @license
  * Lodash <https://lodash.com/>
  * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
  * Released under MIT license <https://lodash.com/license>
  * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
  * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  *)

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/