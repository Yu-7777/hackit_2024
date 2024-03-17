const MoneyIcons = ({ children }) => {
  return (
    <div className="w-8 h-8 ml-4 mt-2 bg-gray-200 rounded-full flex items-center justify-center">
      <div style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  );
};

export default MoneyIcons;
