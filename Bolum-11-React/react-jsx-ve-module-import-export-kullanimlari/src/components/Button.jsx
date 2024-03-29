// export default function Button() {
//   return <button>Button Component</button>;
// }

// 1.Yontem
// export default function Button(props) {
//   console.log(props);
//   return (
//     <button className={props.className} data-id={props.dataId}>
//       {props.info}
//     </button>
//   );
// }

// 2.Yontem
// export default function Button(props) {
//   const { className, dataId, info } = props; // destructuring

//   return (
//     <button className={className} data-id={dataId}>
//       {info}
//     </button>
//   );
// }

// 3.Yontem
export default function Button({ className, dataId, info }) {
  return (
    <button className={className} data-id={dataId}>
      {info}
    </button>
  );
}

// export default Button;
