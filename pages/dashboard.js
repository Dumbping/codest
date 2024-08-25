import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaUser, FaCreditCard, FaMoneyBillWave, FaChartLine, FaEnvelope, FaHeadset, FaChevronDown, FaMoneyBillAlt, FaExchangeAlt, FaPiggyBank, FaTimes, FaFilter } from 'react-icons/fa';

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const accounts = [
    { name: 'Checking Account', balance: 550266.89, number: '**** 29984', icon: FaMoneyBillAlt },
    { name: 'Savings Account', balance: 12990346.67, number: '**** 51278', icon: FaPiggyBank },
    { name: 'Investment Account', balance: 9000578.00, number: '**** 90912', icon: FaChartLine },
    { name: 'Business Account', balance: -250.00, number: '**** 31906', icon: FaMoneyBillWave },
  ];

  const transactions = [
    { name: 'Tir Hosp CHARGE', code: 'GS0457', date: '2020-08-25', amount: -120.50 },
    { name: 'Online Deposit', code: 'SD0875', date: '2020-08-24', amount: 3000.00 },
    { name: 'POS Pazari Vjetër', code: 'EB0129', date: '2020-08-23', amount: -85.20 },
    { name: 'Ref : INVPROF-634532', code: 'IA0678', date: '2020-08-22', amount: 6434500.75 },
    { name: 'POS NBT Oil', code: 'GS0299', date: '2020-08-21', amount: -30.75 },
    { name: 'POS Qyeteti', code: 'OS0902', date: '2019-08-20', amount: -50.99 },
    { name: 'Fanatik Shop', code: 'OS0667', date: '2019-04-11', amount: -120.59 },
    { name: 'Tirana East Gate', code: 'OS0356', date: '2019-03-25', amount: -5.39 },
    { name: 'Al Gov Gov', code: 'OS0112', date: '2019-03-20', amount: -150.99 },
    { name: 'Lidl Inter', code: 'OS0783', date: '2019-02-07', amount: -25.99 },
  ];

  const handleActionClick = (action) => {
    setModalContent(`You don't have access to the ${action} feature. Please contact your account manager.`);
    setShowModal(true);
  };

  const Modal = ({ content, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Notice</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <p className="text-gray-700 mb-6">{content}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    const checkLoginStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        router.push('/login?message=loggedOut');
      }
    };
  
    checkLoginStatus();
  
    // Set up auto-logout after 30 minutes of inactivity
    let logoutTimer = setTimeout(() => {
      handleLogout();
    }, 30 * 60 * 1000);
  
    // Reset the timer on user activity
    const resetTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(() => {
        handleLogout();
      }, 30 * 60 * 1000);
    };
  
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);
  
    return () => {
      clearTimeout(logoutTimer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login?message=loggedOut');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>TirprivateBank Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">TirprivateBank</div>
          <nav className="flex items-center space-x-4 md:space-x-6">
            <button className="hover:text-blue-200"><FaHeadset className="inline-block mr-1" /> Support</button>
            <button className="hover:text-blue-200 relative">
              <FaEnvelope className="inline-block mr-1" /> Messages
              <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 text-xs bg-red-500 rounded-full">3</span>
            </button>
            <div className="relative">
              <button
                className="flex items-center hover:text-blue-200"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <FaUser className="mr-2" /> Philip Miller <FaChevronDown className="ml-1" />
              </button>
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <button 
        onClick={handleLogout}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Logout
      </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome, Philip Miller</h1>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <nav className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    className={`w-full text-left py-2 px-4 rounded ${activeTab === 'overview' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    <FaChartLine className="inline-block mr-2" /> Overview
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left py-2 px-4 rounded ${activeTab === 'accounts' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('accounts')}
                  >
                    <FaUser className="inline-block mr-2" /> Accounts
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left py-2 px-4 rounded ${activeTab === 'cards' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('cards')}
                  >
                    <FaCreditCard className="inline-block mr-2" /> Cards
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-full md:w-3/4 px-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Account Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {accounts.map((account, index) => (
                      <div key={index} className="bg-blue-100 p-4 rounded-lg">
                        <account.icon className="text-3xl mb-2 text-blue-600" />
                        <h3 className="text-lg font-semibold mb-1">{account.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{account.number}</p>
                        <p className="text-2xl font-bold">${account.balance.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 mb-8">
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                      onClick={() => handleActionClick('Transfer Money')}
                    >
                      <FaExchangeAlt className="inline-block mr-2" /> Transfer Money
                    </button>
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                      onClick={() => handleActionClick('Deposit')}
                    >
                      <FaMoneyBillAlt className="inline-block mr-2" /> Deposit
                    </button>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Recent Transactions</h3>
                    <button
                      className="text-blue-600 hover:underline flex items-center"
                      onClick={() => setShowFilterOptions(!showFilterOptions)}
                    >
                      <FaFilter className="mr-1" /> Filter
                    </button>
                  </div>
                  {showFilterOptions && (
                    <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                      <h4 className="font-semibold mb-2">Filter Options</h4>
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-white px-3 py-1 rounded-full text-sm">Date Range</button>
                        <button className="bg-white px-3 py-1 rounded-full text-sm">Amount</button>
                        <button className="bg-white px-3 py-1 rounded-full text-sm">Transaction Type</button>
                      </div>
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left">Name</th>
                          <th className="px-4 py-2 text-left">Code</th>
                          <th className="px-4 py-2 text-left">Date</th>
                          <th className="px-4 py-2 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(showAllTransactions ? transactions : transactions.slice(0, 3)).map((transaction, index) => (
                          <tr key={index} className="border-b">
                            <td className="px-4 py-2">{transaction.name}</td>
                            <td className="px-4 py-2">{transaction.code}</td>
                            <td className="px-4 py-2">{transaction.date}</td>
                            <td className={`px-4 py-2 text-right ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              ${Math.abs(transaction.amount).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => setShowAllTransactions(!showAllTransactions)}
                    >
                      {showAllTransactions ? 'Show Less' : 'Show More Transactions'}
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 'accounts' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Accounts</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {accounts.map((account, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">{account.name}</h3>
                        <p className="text-gray-600 mb-2">{account.number}</p>
                        <p className="text-2xl font-bold mb-4">${account.balance.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'cards' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Cards</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <h3 className="text-lg font-semibold mb-2">Debit Card</h3>
                      <p className="text-gray-600 mb-4">**** **** **** 1234</p>
                      <div className="space-x-2">
                        <button
                          className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-200"
                          onClick={() => handleActionClick('Freeze Card')}
                        >
                          Freeze Card
                        </button>
                        <button
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                          onClick={() => handleActionClick('Report Lost/Stolen')}
                        >
                          Report Lost/Stolen
                        </button>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <h3 className="text-lg font-semibold mb-2">Credit Card</h3>
                      <p className="text-gray-600 mb-4">**** **** **** 5678</p>
                      <div className="space-x-2">
                        <button
                          className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-200"
                          onClick={() => handleActionClick('Freeze Card')}
                        >
                          Freeze Card
                        </button>
                        <button
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                          onClick={() => handleActionClick('Report Lost/Stolen')}
                        >
                          Report Lost/Stolen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <Modal
          content={modalContent}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}