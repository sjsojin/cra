function Props({ data, children }) {
  return (
    <div>
      <p>{data}</p>
      <p> {children}</p>
    </div>
  );
}
export default Props;
