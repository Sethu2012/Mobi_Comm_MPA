
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

              // JavaScript to load popular plans and validate mobile number
              const plansData = {
            "popular-plans": {
                plans: [
                    { name: "Popular 149", data: "1GB/Day", validity: "28 Days", price: "₹149" },
                    { name: "Popular 199", data: "1.5GB/Day", validity: "28 Days", price: "₹199" },
                    { name: "Popular 399", data: "3GB/Day", validity: "56 Days", price: "₹399" },
                    { name: "Popular 599", data: "2GB/Day", validity: "84 Days", price: "₹599" },
                    { name: "Popular 799", data: "2.5GB/Day", validity: "84 Days", price: "₹799" },
                    { name: "Popular 999", data: "3GB/Day + OTT", validity: "90 Days", price: "₹999" },
                    { name: "Popular 129", data: "1.25GB/Day", validity: "24 Days", price: "₹129" },
                    { name: "Popular 359", data: "2.5GB/Day", validity: "56 Days", price: "₹359" },
                    { name: "Popular 499", data: "4GB/Day", validity: "84 Days", price: "₹499" },
                    { name: "Popular 699", data: "5GB/Day", validity: "100 Days", price: "₹699" }
                ],
                recommended: [
                    { name: "Popular 149", data: "1GB/Day", validity: "28 Days", voice: "Unlimited", messages: "100/Day", price: "₹149" },
                    { name: "Popular 599", data: "2GB/Day", validity: "84 Days", voice: "Unlimited", messages: "100/Day", price: "₹599" }
                ]
            },
            "5g-unlimited": {
                plans: [
                    { name: "5G Ultra 299", data: "Unlimited 5G", validity: "28 Days", price: "₹299" },
                    { name: "5G Ultra 499", data: "Unlimited 5G + OTT", validity: "56 Days", price: "₹499" },
                    { name: "5G Ultra 199", data: "Unlimited 5G", validity: "14 Days", price: "₹199" },
                    { name: "5G Ultra 399", data: "Unlimited 5G + OTT", validity: "42 Days", price: "₹399" },
                    { name: "5G Ultra 599", data: "Unlimited 5G", validity: "70 Days", price: "₹599" },
                    { name: "5G Ultra 799", data: "Unlimited 5G + OTT", validity: "98 Days", price: "₹799" },
                    { name: "5G Ultra 999", data: "Unlimited 5G", validity: "126 Days", price: "₹999" },
                    { name: "5G Ultra 1199", data: "Unlimited 5G + OTT", validity: "154 Days", price: "₹1199" },
                    { name: "5G Ultra 1399", data: "Unlimited 5G", validity: "182 Days", price: "₹1399" },
                    { name: "5G Ultra 1599", data: "Unlimited 5G + OTT", validity: "210 Days", price: "₹1599" }
                ],
                recommended: [
                    { name: "5G Ultra 299", data: "Unlimited 5G", validity: "28 Days", voice: "Unlimited", messages: "100/Day", price: "₹299" },
                    { name: "5G Ultra 499", data: "Unlimited 5G + OTT", validity: "56 Days", voice: "Unlimited", messages: "100/Day", price: "₹499" }
                ]
            },
            "entertainment": {
                plans: [
                    { name: "OTT 599", data: "2GB/Day + Netflix", validity: "28 Days", price: "₹599" },
                    { name: "OTT 799", data: "2.5GB/Day + Netflix + Prime", validity: "28 Days", price: "₹799" },
                    { name: "OTT 699", data: "2GB/Day + Prime", validity: "28 Days", price: "₹699" },
                    { name: "OTT 899", data: "2.5GB/Day + Netflix + Prime + Hotstar", validity: "28 Days", price: "₹899" },
                    { name: "OTT 999", data: "3GB/Day + Netflix + Prime", validity: "56 Days", price: "₹999" },
                    { name: "OTT 1099", data: "3.5GB/Day + Netflix + Prime + Hotstar", validity: "56 Days", price: "₹1099" },
                    { name: "OTT 1199", data: "4GB/Day + Netflix + Prime", validity: "84 Days", price: "₹1199" },
                    { name: "OTT 1299", data: "4.5GB/Day + Netflix + Prime + Hotstar", validity: "84 Days", price: "₹1299" },
                    { name: "OTT 1399", data: "5GB/Day + Netflix + Prime", validity: "84 Days", price: "₹1399" },
                    { name: "OTT 1499", data: "5.5GB/Day + Netflix + Prime + Hotstar", validity: "84 Days", price: "₹1499" }
                ],
                recommended: [
                    { name: "OTT 599", data: "2GB/Day + Netflix", validity: "28 Days", voice: "Unlimited", messages: "100/Day", price: "₹599" },
                    { name: "OTT 799", data: "2.5GB/Day + Netflix + Prime", validity: "28 Days", voice: "Unlimited", messages: "100/Day", price: "₹799" }
                ]
            },
            "annual": {
                plans: [
                    { name: "Annual 1499", data: "1.5GB/Day", validity: "365 Days", price: "₹1499" },
                    { name: "Annual 2199", data: "2GB/Day", validity: "365 Days", price: "₹2199" },
                    { name: "Annual 1999", data: "1.75GB/Day", validity: "365 Days", price: "₹1999" },
                    { name: "Annual 2499", data: "2.25GB/Day", validity: "365 Days", price: "₹2499" },
                    { name: "Annual 2999", data: "2.5GB/Day", validity: "365 Days", price: "₹2999" },
                    { name: "Annual 3499", data: "3GB/Day", validity: "365 Days", price: "₹3499" },
                    { name: "Annual 3999", data: "3.5GB/Day", validity: "365 Days", price: "₹3999" },
                    { name: "Annual 4499", data: "4GB/Day", validity: "365 Days", price: "₹4499" },
                    { name: "Annual 4999", data: "4.5GB", validity: "365 Days", price: "₹4999" },
                    { name: "Annual 5499", data: "5GB/Day", validity: "365 Days", price: "₹5499" }
                ],
                recommended: [
                    { name: "Annual 1499", data: "1.5GB/Day", validity: "365 Days", voice: "Unlimited", messages: "100/Day", price: "₹1499" },
                    { name: "Annual 2199", data: "2GB/Day", validity: "365 Days", voice: "Unlimited", messages: "100/Day", price: "₹2199" }
                ]
            },
            "data-addons": {
                plans: [
                    { name: "Add-on 48", data: "3GB", validity: "1 Day", price: "₹48" },
                    { name: "Add-on 98", data: "12GB", validity: "28 Days", price: "₹98" },
                    { name: "Add-on 128", data: "15GB", validity: "30 Days", price: "₹128" },
                    { name: "Add-on 198", data: "20GB", validity: "60 Days", price: "₹198" },
                    { name: "Add-on 298", data: "25GB", validity: "90 Days", price: "₹298" },
                    { name: "Add-on 398", data: "30GB", validity: "120 Days", price: "₹398" },
                    { name: "Add-on 498", data: "35GB", validity: "150 Days", price: "₹498" },
                    { name: "Add-on 598", data: "40GB", validity: "180 Days", price: "₹598" },
                    { name: "Add-on 698", data: "45GB", validity: "210 Days", price: "₹698" },
                    { name: "Add-on 798", data: "50GB", validity: "240 Days", price: "₹798" }
                ],
                recommended: [
                    { name: "Add-on 98", data: "12GB", validity: "28 Days", voice: "N/A", messages: "N/A", price: "₹98" },
                    { name: "Add-on 198", data: "20GB", validity: "60 Days", voice: "N/A", messages: "N/A", price: "₹198" }
                ]
            },
            "international": {
                plans: [
                    { name: "Global 499", data: "1GB", validity: "7 Days", price: "₹499" },
                    { name: "Global 999", data: "3GB", validity: "28 Days", price: "₹999" },
                    { name: "Global 599", data: "2GB", validity: "14 Days", price: "₹599" },
                    { name: "Global 1499", data: "5GB", validity: "30 Days", price: "₹1499" },
                    { name: "Global 1999", data: "7GB", validity: "45 Days", price: "₹1999" },
                    { name: "Global 2499", data: "10GB", validity: "60 Days", price: "₹2499" },
                    { name: "Global 2999", data: "15GB", validity: "75 Days", price: "₹2999" },
                    { name: "Global 3499", data: "20GB", validity: "90 Days", price: "₹3499" },
                    { name: "Global 3999", data: "25GB", validity: "100 Days", price: "₹3999" },
                    { name: "Global 4499", data: "30GB", validity: "120 Days", price: "₹4499" }
                ],
                recommended: [
                    { name: "Global 499", data: "1GB", validity: "7 Days", voice: "100 mins", messages: "100 SMS", price: "₹499" },
                    { name: "Global 999", data: "3GB", validity: "28 Days", voice: "Unlimited", messages: "300 SMS", price: "₹999" }
                ]
            },
            "redemption": {
                plans: [
                    { name: "Redeem 49", data: "5GB", validity: "28 Days", price: "₹49" },
                    { name: "Redeem 99", data: "10GB", validity: "56 Days", price: "₹99" },
                    { name: "Redeem 149", data: "15GB", validity: "84 Days", price: "₹149" },
                    { name: "Redeem 199", data: "20GB", validity: "112 Days", price: "₹199" },
                    { name: "Redeem 249", data: "25GB", validity: "140 Days", price: "₹249" },
                    { name: "Redeem 299", data: "30GB", validity: "168 Days", price: "₹299" },
                    { name: "Redeem 349", data: "35GB", validity: "196 Days", price: "₹349" },
                    { name: "Redeem 399", data: "40GB", validity: "224 Days", price: "₹399" },
                    { name: "Redeem 449", data: "45GB", validity: "252 Days", price: "₹449" },
                    { name: "Redeem 499", data: "50GB", validity: "280 Days", price: "₹499" }
                ],
                recommended: [
                    { name: "Redeem 49", data: "5GB", validity: "28 Days", voice: "N/A", messages: "N/A", price: "₹49" },
                    { name: "Redeem 99", data: "10GB", validity: "56 Days", voice: "N/A", messages: "N/A", price: "₹99" }
                ]
            }
        };
// Dummy data for subscribers
const subscribersData = [
    {
        name: "John Doe",
        mobile: "123-456-7890",
        plan: "Popular 149",
        expiration: "2025-03-01",
        location: "Mumbai",
        alternateMobile: "098-765-4321",
        email: "john.doe@example.com",
        address: "123 Main St, Mumbai",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "Popular 149",
            planPrice: "₹149",
            validity: "28 days",
            data: "1GB/day"
        },
        transactionHistory: [
            {
                planName: "Popular 149",
                planPrice: "₹149",
                paymentMethod: "Credit Card",
                transactionID: "TXN10001",
                rechargedDateTime: "2025-02-01 10:00:00"
            }
        ]
    },
    {
        name: "Jane Smith",
        mobile: "987-654-3210",
        plan: "5G Ultra 299",
        expiration: "2025-03-15",
        location: "Delhi",
        alternateMobile: "123-456-7890",
        email: "jane.smith@example.com",
        address: "456 Elm St, Delhi",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "5G Ultra 299",
            planPrice: "₹299",
            validity: "30 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "5G Ultra 299",
                planPrice: "₹299",
                paymentMethod: "Debit Card",
                transactionID: "TXN10002",
                rechargedDateTime: "2025-01-15 10:00:00"
            }
        ]
    },
    {
        name: "David Lee",
        mobile: "555-123-4567",
        plan: "OTT 599",
        expiration: "2025-03-10",
        location: "Bangalore",
        alternateMobile: "",
        email: 'david.lee@example.com',
        address: '789 Pine St, Bangalore',
        profilePicture: 'https://via.placeholder.com/150',
        currentPlan: {
            planName:'OTT 599',
            planPrice:'₹599',
            validity:'30 days',
            data:'Unlimited'
        },
        transactionHistory:[
            {
                planName:'OTT 599',
                planPrice:'₹599',
                paymentMethod:'Credit Card',
                transactionID:'TXN10003',
                rechargedDateTime:'2025-02-10 12:30:00'
            }
        ]
    },
    {
      name:"Emily Wong ",
      mobile:"111 -222 -3333 ",
      plan:"Annual 1499 ",
      expiration:"2025 -03 -20 ",
      location:"Kolkata ",
      alternateMobile:"5555555555 ",
      email:"emily.wong@example.com ",
      address:"321 Oak St, Kolkata ",
      profilePicture:"https://via.placeholder.com/150 ",
      currentPlan:{
          planName:"Annual 1499 ",
          planPrice:"₹1499 ",
          validity:"365 days ",
          data:"2GB/day "
      },
      transactionHistory:[
          {
              planName:"Annual 1499 ",
              planPrice:"₹1499 ",
              paymentMethod:"Credit Card ",
              transactionID:"TXN10004 ",
              rechargedDateTime:"2024-12-01 09:45:00 "
          }
      ]
    },
    {
      name:"Alice Brown ",
      mobile:"444 -555 -6666 ",
      plan:"Add-on 48 ",
      expiration:"2025 -02 -28 ",
      location:"Chennai ",
      alternateMobile:"6666666666 ",
      email:"alice.brown@example.com ",
      address:"654 Maple St, Chennai ",
      profilePicture:"https://via.placeholder.com/150 ",
      currentPlan:{
          planName:"Add-on 48 ",
          planPrice:"₹48 ",
          validity:"7 days ",
          data:"1GB "
      },
      transactionHistory:[
          {
              planName:"Add-on 48 ",
              planPrice:"₹48 ",
              paymentMethod:"Debit Card ",
              transactionID:"TXN10005 ",
              rechargedDateTime:"2025-02-20 16:15:00 "
          }
      ]
    },
    // Additional subscribers with similar structure
    {
       name:'Bob Johnson ',
       mobile:'777 -888 -9999 ',
       plan:'Popular 599 ',
       expiration:'2025 -03 -05 ',
       location:'Hyderabad ',
       alternateMobile:'7777777777 ',
       email:'bob.johnson@example.com ',
       address:'987 Birch St, Hyderabad ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'Popular 599 ',
           planPrice:'₹599 ',
           validity:'30 days ',
           data:'1.5GB/day '
       },
       transactionHistory:[
           {
               planName:'Popular 599 ',
               planPrice:'₹599 ',
               paymentMethod:'Credit Card ',
               transactionID:'TXN10006 ',
               rechargedDateTime:'2025 -01 -25 11 :20 :00 '
           }
       ]
   },
   {
       name:'Charlie Davis ',
       mobile:'333 -444 -5555 ',
       plan:'5G Ultra 499 ',
       expiration:'2025 -03 -12 ',
       location:'Pune ',
       alternateMobile:'8888888888 ',
       email:'charlie.davis@example.com ',
       address:'135 Willow St, Pune ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'5G Ultra 499 ',
           planPrice:'₹499 ',
           validity:'30 days ',
           data:'2GB/day '
       },
       transactionHistory:[
           {
               planName:'5G Ultra 499 ',
               planPrice:'₹499 ',
               paymentMethod:'Debit Card ',
               transactionID:'TXN10007 ',
               rechargedDateTime:'2025 -02 -05 15 :45 :00 '
           }
       ]
   },
   // New entries with plans expiring soon
   {
     name : 'George Adams ', 
     mobile : '123 -987 -6543 ', 
     plan : 'Popular 199 ', 
     expiration : '2025 -02 -23 ', 
     location : 'Bhopal ', 
     alternateMobile : '', 
     email : 'george.adams@example.com ', 
     address : '963 Elm St, Bhopal ', 
     profilePicture : 'https://via.placeholder.com/150 ', 
     currentPlan : { 
         planName : 'Popular 199 ', 
         planPrice : '₹199 ', 
         validity : '30 days ', 
         data : '1GB/day '
     }, 
     transactionHistory : [ 
         { 
             planName : 'Popular 199 ', 
             planPrice : '₹199 ', 
             paymentMethod : 'Credit Card ', 
             transactionID : 'TXN10008 ', 
             rechargedDateTime : '2025-02-22 08 :00 :00 '
         } 
     ] 
   },  
   {
     name : 'Hannah Green ', 
     mobile : '555 -789 -1234 ', 
     plan : '5G Ultra 399 ', 
     expiration : '2025 -02 -24 ', 
     location : 'Surat ', 
     alternateMobile : '', 
     email : 'hannah.green@example.com ', 
     address : '159 Maple Ave, Surat ', 
     profilePicture : 'https://via.placeholder.com/150 ', 
     currentPlan : { 
         planName : '5G Ultra 399 ', 
         planPrice : '₹399 ', 
         validity : '30 days ', 
         data : '2GB/day '
     }, 
     transactionHistory : [ 
         { 
             planName : '5G Ultra 399 ', 
             planPrice : '₹399 ', 
             paymentMethod : 'Debit Card ', 
             transactionID : 'TXN10009 ', 
             rechargedDateTime : '2025 -02 -21 09 ;30 ;00 '
         } 
     ]  
   },  
   {
     name :'Ian Baker',  
     mobile :'666 -333 -2222',  
     plan :'OTT 699',  
     expiration :'2025 -02 -25',  
     location :'Nagpur',  
     alternateMobile :'4444444444',  
     email :'ian.baker@example.com',  
     address :'753 Oak Ave, Nagpur',  
     profilePicture :'https://via.placeholder.com/150',  
     currentPlan:{  
         planName :'OTT 699',  
         planPrice :'₹699',  
         validity :'30 days',  
         data :'Unlimited'  
     },  
     transactionHistory:[  
         {  
             planName :'OTT 699',  
             planPrice :'₹699',  
             paymentMethod :'Credit Card',  
             transactionID :'TXN10010',  
             rechargedDateTime :'2025-02-19 14 ;00 ;00'  
         }  
     ]  
   },
   {
        name: "Virat Kohli",
        mobile: "987-654-3210",
        plan: "5G Ultra 599",
        expiration: "2025-03-15",
        location: "Delhi",
        alternateMobile: "123-456-7890",
        email: "virat.kohli@example.com",
        address: "123 Cricket Lane, Delhi",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "5G Ultra 599",
            planPrice: "₹599",
            validity: "30 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "5G Ultra 599",
                planPrice: "₹599",
                paymentMethod: "Credit Card",
                transactionID: "TXN20001",
                rechargedDateTime: "2025-01-20 14:00:00"
            }
        ]
    },
    {
        name: "MS Dhoni",
        mobile: "555-123-4567",
        plan: "OTT 699",
        expiration: "2025-03-10",
        location: "Ranchi",
        alternateMobile: "",
        email: "ms.dhoni@example.com",
        address: "456 Captain's Road, Ranchi",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "OTT 699",
            planPrice: "₹699",
            validity: "30 days",
            data: "Unlimited"
        },
        transactionHistory: [
            {
                planName: "OTT 699",
                planPrice: "₹699",
                paymentMethod: "Debit Card",
                transactionID: "TXN20002",
                rechargedDateTime: "2025-02-05 12:30:00"
            }
        ]
    },
    {
        name: "Rajinikanth",
        mobile: "888-222-9999",
        plan: "Annual 2499",
        expiration: "2025-04-01",
        location: "Chennai",
        alternateMobile: "",
        email: "rajinikanth@example.com",
        address: "789 Superstar St, Chennai",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "Annual 2499",
            planPrice: "₹2499",
            validity: "365 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "Annual 2499",
                planPrice: "₹2499",
                paymentMethod: "Credit Card",
                transactionID: "TXN20003",
                rechargedDateTime: "2024-12-01 09:45:00"
            }
        ]
    },
    {
        name:"Kamal Haasan ",
        mobile:"777 -888 -9999 ",
        plan:"Popular 499 ",
        expiration:"2025 -03 -05 ",
        location:"Chennai ",
        alternateMobile:"6666666666 ",
        email:"kamal.haasan@example.com ",
        address:"123 Actor's Lane, Chennai ",
        profilePicture:"https://via.placeholder.com/150 ",
        currentPlan:{
            planName:"Popular 499 ",
            planPrice:"₹499 ",
            validity:"30 days ",
            data:"1.5GB/day "
        },
       transactionHistory:[
           {
               planName:"Popular 499 ",
               planPrice:"₹499 ",
               paymentMethod:"Credit Card ",
               transactionID:"TXN20004 ",
               rechargedDateTime:"2025 -02 -15 11 :20 :00 "
           }
       ]
   },
   {
       name:'Shikhar Dhawan ',
       mobile:'333 -444 -5555 ',
       plan:'5G Ultra 399 ',
       expiration:'2025 -03 -12 ',
       location:'Delhi ',
       alternateMobile:'8888888888 ',
       email:'shikhar.dhawan@example.com ',
       address:'456 Openers St, Delhi ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'5G Ultra 399 ',
           planPrice:'₹399 ',
           validity:'30 days ',
           data:'2GB/day '
       },
       transactionHistory:[
           {
               planName:'5G Ultra 399 ',
               planPrice:'₹399 ',
               paymentMethod:'Debit Card ',
               transactionID:'TXN20005 ',
               rechargedDateTime:'2025 -02 -20 14 :15 :00 '
           }
       ]
   },
   {
       name :'Dhanush',  
       mobile :'555 -000 -1111',  
       plan :'OTT 999',  
       expiration :'2025 -02 -28',  
       location :'Madurai',  
       alternateMobile :'4444444444',  
       email :'dhanush@example.com',  
       address :'789 Actors Lane, Madurai',  
       profilePicture :'https://via.placeholder.com/150',  
       currentPlan:{  
           planName :'OTT 999',  
           planPrice :'₹999',  
           validity :'30 days',  
           data :'Unlimited'  
       },  
       transactionHistory:[  
           {  
               planName :'OTT 999',  
               planPrice :'₹999',  
               paymentMethod :'Credit Card',  
               transactionID :'TXN20006',  
               rechargedDateTime :'2025-02-22 10 ;00 ;00'  
           }  
       ]  
   },
   {
        name: "Rohit Sharma",
        mobile: "999-888-7777",
        plan: "5G Ultra 499",
        expiration: "2025-03-20",
        location: "Mumbai",
        alternateMobile: "888-777-6666",
        email: "rohit.sharma@example.com",
        address: "123 Cricket Road, Mumbai",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "5G Ultra 499",
            planPrice: "₹499",
            validity: "30 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "5G Ultra 499",
                planPrice: "₹499",
                paymentMethod: "Credit Card",
                transactionID: "TXN30001",
                rechargedDateTime: "2025-01-25 13:00:00"
            }
        ]
    },
    {
        name: "Hardik Pandya",
        mobile: "888-555-4444",
        plan: "OTT 599",
        expiration: "2025-03-12",
        location: "Baroda",
        alternateMobile: "",
        email: "hardik.pandya@example.com",
        address: "456 All Rounder St, Baroda",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "OTT 599",
            planPrice: "₹599",
            validity: "30 days",
            data: "Unlimited"
        },
        transactionHistory: [
            {
                planName: "OTT 599",
                planPrice: "₹599",
                paymentMethod: "Debit Card",
                transactionID: "TXN30002",
                rechargedDateTime: "2025-02-15 11:30:00"
            }
        ]
    },
    {
        name:"Ajith Kumar ",
        mobile:"777 -999 -8888 ",
        plan:"Annual 1999 ",
        expiration:"2025 -04 -01 ",
        location:"Chennai ",
        alternateMobile:"6666666666 ",
        email:"ajith.kumar@example.com ",
        address:"789 Star Lane, Chennai ",
        profilePicture:"https://via.placeholder.com/150 ",
        currentPlan:{
            planName:"Annual 1999 ",
            planPrice:"₹1999 ",
            validity:"365 days ",
            data:"2GB/day "
        },
       transactionHistory:[
           {
               planName:"Annual 1999 ",
               planPrice:"₹1999 ",
               paymentMethod:"Credit Card ",
               transactionID:"TXN30003 ",
               rechargedDateTime:"2024-12-10 10 :00 :00 "
           }
       ]
   },
   {
       name:'Vijay ',
       mobile:'333 -111 -2222 ',
       plan:'5G Ultra 299 ',
       expiration:'2025 -03 -15 ',
       location:'Chennai ',
       alternateMobile:'8888888888 ',
       email:'vijay@example.com ',
       address:'123 Actors Lane, Chennai ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'5G Ultra 299 ',
           planPrice:'₹299 ',
           validity:'30 days ',
           data:'2GB/day '
       },
       transactionHistory:[
           {
               planName:'5G Ultra 299 ',
               planPrice:'₹299 ',
               paymentMethod:'Debit Card ',
               transactionID:'TXN30004 ',
               rechargedDateTime:'2025 -02 -12 14 :15 :00 '
           }
       ]
   },
   {
       name :'Kedar Jadhav',  
       mobile :'555 -333 -2222',  
       plan :'OTT 699',  
       expiration :'2025 -02 -28',  
       location :'Pune',  
       alternateMobile :'4444444444',  
       email :'kedar.jadhav@example.com',  
       address :'456 Middle Order St, Pune',  
       profilePicture :'https://via.placeholder.com/150',  
       currentPlan:{  
           planName :'OTT 699',  
           planPrice :'₹699',  
           validity :'30 days',  
           data :'Unlimited'  
       },  
       transactionHistory:[  
           {  
               planName :'OTT 699',  
               planPrice :'₹699',  
               paymentMethod :'Credit Card',  
               transactionID :'TXN30005',  
               rechargedDateTime :'2025-02-22 10 ;00 ;00'  
           }  
       ]  
   }, 
   {
      name :"Suresh Raina", 
      mobile :"999 -000 -1111", 
      plan :"Annual 2499", 
      expiration :"2025 -04 -15", 
      location :"Delhi", 
      alternateMobile :"8888888888", 
      email :"suresh.raina@example.com", 
      address :"789 Batsman St, Delhi", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"Annual 2499", 
          planPrice :"₹2499", 
          validity :"365 days", 
          data :"2GB/day" 
      }, 
      transactionHistory :[ 
          { 
              planName :"Annual 2499", 
              planPrice :"₹2499", 
              paymentMethod :"Debit Card", 
              transactionID :"TXN30006", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
      ] 
   },
   {
        name: "Shubman Gill",
        mobile: "888-999-0000",
        plan: "5G Ultra 399",
        expiration: "2025-03-30",
        location: "Punjab",
        alternateMobile: "777-888-9999",
        email: "shubman.gill@example.com",
        address: "123 Young Star St, Punjab",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "5G Ultra 399",
            planPrice: "₹399",
            validity: "30 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "5G Ultra 399",
                planPrice: "₹399",
                paymentMethod: "Credit Card",
                transactionID: "TXN40001",
                rechargedDateTime: "2025-01-15 10:00:00"
            }
        ]
    },
    {
        name: "Ravindra Jadeja",
        mobile: "777-666-5555",
        plan: "OTT 499",
        expiration: "2025-03-25",
        location: "Rajkot",
        alternateMobile: "",
        email: "ravindra.jadeja@example.com",
        address: "456 All-Rounder Lane, Rajkot",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "OTT 499",
            planPrice: "₹499",
            validity: "30 days",
            data: "Unlimited"
        },
        transactionHistory: [
            {
                planName: "OTT 499",
                planPrice: "₹499",
                paymentMethod: "Debit Card",
                transactionID: "TXN40002",
                rechargedDateTime: "2025-02-10 12:30:00"
            }
        ]
    },
    {
        name:"Karthi ",
        mobile:"666 -555 -4444 ",
        plan:"Annual 1999 ",
        expiration:"2025 -04 -01 ",
        location:"Chennai ",
        alternateMobile:"5555555555 ",
        email:"karthi@example.com ",
        address:"789 Actor's Lane, Chennai ",
        profilePicture:"https://via.placeholder.com/150 ",
        currentPlan:{
            planName:"Annual 1999 ",
            planPrice:"₹1999 ",
            validity:"365 days ",
            data:"2GB/day "
        },
       transactionHistory:[
           {
               planName:"Annual 1999 ",
               planPrice:"₹1999 ",
               paymentMethod:"Credit Card ",
               transactionID:"TXN40003 ",
               rechargedDateTime:"2024-12-10 10 :00 :00 "
           }
       ]
   },
   {
       name:'Trisha Krishnan ',
       mobile:'444 -333 -2222 ',
       plan:'5G Ultra 299 ',
       expiration:'2025 -03 -15 ',
       location:'Chennai ',
       alternateMobile:'8888888888 ',
       email:'trisha@example.com ',
       address:'123 Actress Lane, Chennai ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'5G Ultra 299 ',
           planPrice:'₹299 ',
           validity:'30 days ',
           data:'2GB/day '
       },
       transactionHistory:[
           {
               planName:'5G Ultra 299 ',
               planPrice:'₹299 ',
               paymentMethod:'Debit Card ',
               transactionID:'TXN40004 ',
               rechargedDateTime:'2025 -02 -12 14 :15 :00 '
           }
       ]
   },
   {
       name :'Ajay Devgn',  
       mobile :'999 -111 -2222',  
       plan :'OTT 799',  
       expiration :'2025 -02 -28',  
       location :'Mumbai',  
       alternateMobile :'4444444444',  
       email :'ajay.devgn@example.com',  
       address :'456 Action St, Mumbai',  
       profilePicture :'https://via.placeholder.com/150',  
       currentPlan:{  
           planName :'OTT 799',  
           planPrice :'₹799',  
           validity :'30 days',  
           data :'Unlimited'  
       },  
       transactionHistory:[  
           {  
               planName :'OTT 799',  
               planPrice :'₹799',  
               paymentMethod :'Credit Card',  
               transactionID :'TXN40005',  
               rechargedDateTime :'2025-02-22 10 ;00 ;00'  
           }  
       ]  
   }, 
   {
      name :"Samantha Ruth Prabhu", 
      mobile :"888 -777 -6666", 
      plan :"Annual 2499", 
      expiration :"2025 -04 -15", 
      location :"Hyderabad", 
      alternateMobile :"999-000-1111", 
      email :"samantha@example.com", 
      address :"789 Star Lane, Hyderabad", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"Annual 2499", 
          planPrice :"₹2499", 
          validity :"365 days", 
          data :"2GB/day" 
      }, 
      transactionHistory :[ 
          { 
              planName :"Annual 2499", 
              planPrice :"₹2499", 
              paymentMethod :"Debit Card", 
              transactionID :"TXN40006", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
      ] 
   },
   {
        name: "Byju Raveendran",
        mobile: "999-888-7777",
        plan: "Annual 2499",
        expiration: "2025-04-01",
        location: "Bangalore",
        alternateMobile: "888-777-6666",
        email: "byju.raveendran@example.com",
        address: "123 EdTech Lane, Bangalore",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "Annual 2499",
            planPrice: "₹2499",
            validity: "365 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "Annual 2499",
                planPrice: "₹2499",
                paymentMethod: "Credit Card",
                transactionID: "TXN50001",
                rechargedDateTime: "2024-12-20 09:30:00"
            }
        ]
    },
    {
        name: "Deepinder Goyal",
        mobile: "888-555-4444",
        plan: "5G Ultra 399",
        expiration: "2025-03-15",
        location: "Delhi",
        alternateMobile: "",
        email: "deepinder.goyal@example.com",
        address: "456 Food Tech St, Delhi",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "5G Ultra 399",
            planPrice: "₹399",
            validity: "30 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "5G Ultra 399",
                planPrice: "₹399",
                paymentMethod: "Debit Card",
                transactionID: "TXN50002",
                rechargedDateTime: "2025-02-10 12:30:00"
            }
        ]
    },
    {
        name:"Bhavish Aggarwal ",
        mobile:"777 -666 -5555 ",
        plan:"OTT 699 ",
        expiration:"2025 -03 -20 ",
        location:"Bangalore ",
        alternateMobile:"6666666666 ",
        email:"bhavish.aggarwal@example.com ",
        address:"789 Cab Lane, Bangalore ",
        profilePicture:"https://via.placeholder.com/150 ",
        currentPlan:{
            planName:"OTT 699 ",
            planPrice:"₹699 ",
            validity:"30 days ",
            data:"Unlimited "
        },
       transactionHistory:[
           {
               planName:"OTT 699 ",
               planPrice:"₹699 ",
               paymentMethod:"Credit Card ",
               transactionID:"TXN50003 ",
               rechargedDateTime:"2025 -02 -15 11 :20 :00 "
           }
       ]
   },
   {
       name:'Manish Singh ',
       mobile:'333 -222 -1111 ',
       plan:'Annual 1999 ',
       expiration:'2025 -04 -01 ',
       location:'Delhi ',
       alternateMobile:'8888888888 ',
       email:'manish.singh@example.com ',
       address:'123 Digital Lane, Delhi ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'Annual 1999 ',
           planPrice:'₹1999 ',
           validity:'365 days ',
           data:'2GB/day '
       },
       transactionHistory:[
           {
               planName:'Annual 1999 ',
               planPrice:'₹1999 ',
               paymentMethod:'Debit Card ',
               transactionID:'TXN50004 ',
               rechargedDateTime:'2024 -12 -10 10 :00 :00 '
           }
       ]
   },
   {
       name :'Vidit Aatrey',  
       mobile :'555 -444 -3333',  
       plan :'OTT 499',  
       expiration :'2025 -02 -28',  
       location :'Bangalore',  
       alternateMobile :'4444444444',  
       email :'vidit.aatrey@example.com',  
       address :'456 E-commerce St, Bangalore',  
       profilePicture :'https://via.placeholder.com/150',  
       currentPlan:{  
           planName :'OTT 499',  
           planPrice :'₹499',  
           validity :'30 days',  
           data :'Unlimited'  
       },  
       transactionHistory:[  
           {  
               planName :'OTT 499',  
               planPrice :'₹499',  
               paymentMethod :'Credit Card',  
               transactionID :'TXN50005',  
               rechargedDateTime :'2025-02-22 10 ;00 ;00'  
           }  
       ]  
   }, 
   {
      name :"Siddhant Thakran", 
      mobile :"999 -000 -1111", 
      plan :"Annual 2499", 
      expiration :"2025 -04 -15", 
      location :"Delhi", 
      alternateMobile :"888-777-6666", 
      email :"siddhant.thakran@example.com", 
      address :"789 Innovation St, Delhi", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"Annual 2499", 
          planPrice :"₹2499", 
          validity :"365 days", 
          data :"2GB/day" 
      }, 
      transactionHistory :[ 
          { 
              planName :"Annual 2499", 
              planPrice :"₹2499", 
              paymentMethod :"Debit Card", 
              transactionID :"TXN50006", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
      ] 
   },
   {
        name: "Sundar Pichai",
        mobile: "999-111-2222",
        plan: "Annual 2999",
        expiration: "2025-04-01",
        location: "Mountain View, CA",
        alternateMobile: "888-222-3333",
        email: "sundar.pichai@example.com",
        address: "1600 Amphitheatre Parkway, Mountain View, CA",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "Annual 2999",
            planPrice: "₹2999",
            validity: "365 days",
            data: "3GB/day"
        },
        transactionHistory: [
            {
                planName: "Annual 2999",
                planPrice: "₹2999",
                paymentMethod: "Credit Card",
                transactionID: "TXN60001",
                rechargedDateTime: "2024-12-15 10:00:00"
            }
        ]
    },
    {
        name: "Elon Musk",
        mobile: "888-000-1111",
        plan: "5G Ultra 599",
        expiration: "2025-03-20",
        location: "Austin, TX",
        alternateMobile: "",
        email: "elon.musk@example.com",
        address: "3500 Deer Creek Road, Palo Alto, CA",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "5G Ultra 599",
            planPrice: "₹599",
            validity: "30 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "5G Ultra 599",
                planPrice: "₹599",
                paymentMethod: "Debit Card",
                transactionID: "TXN60002",
                rechargedDateTime: "2025-02-10 14:30:00"
            }
        ]
    },
    {
        name:"Satya Nadella ",
        mobile:"777 -888 -9999 ",
        plan:"Annual 1999 ",
        expiration:"2025 -04 -01 ",
        location:"Redmond, WA ",
        alternateMobile:"6666666666 ",
        email:"satya.nadella@example.com ",
        address:"1 Microsoft Way, Redmond, WA ",
        profilePicture:"https://via.placeholder.com/150 ",
        currentPlan:{
            planName:"Annual 1999 ",
            planPrice:"₹1999 ",
            validity:"365 days ",
            data:"2GB/day "
        },
       transactionHistory:[
           {
               planName:"Annual 1999 ",
               planPrice:"₹1999 ",
               paymentMethod:"Credit Card ",
               transactionID:"TXN60003 ",
               rechargedDateTime:"2024 -12 -10 10 :00 :00 "
           }
       ]
   },
   {
       name:'Tim Cook ',
       mobile:'333 -222 -1111 ',
       plan:'5G Ultra 399 ',
       expiration:'2025 -03 -15 ',
       location:'Cupertino, CA ',
       alternateMobile:'8888888888 ',
       email:'tim.cook@example.com ',
       address:'Apple Park, Cupertino, CA ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'5G Ultra 399 ',
           planPrice:'₹399 ',
           validity:'30 days ',
           data:'2GB/day '
       },
       transactionHistory:[
           {
               planName:'5G Ultra 399 ',
               planPrice:'₹399 ',
               paymentMethod:'Debit Card ',
               transactionID:'TXN60004 ',
               rechargedDateAndTime:'2025 -02 -12 14 :15 :00 '
           }
       ]
   },
   {
       name :'Mark Zuckerberg',  
       mobile :'555 -444 -3333',  
       plan :'OTT 499',  
       expiration :'2025 -02 -28',  
       location :'Menlo Park, CA',  
       alternateMobile :'4444444444',  
       email :'mark.zuckerberg@example.com',  
       address :'1 Hacker Way, Menlo Park, CA',  
       profilePicture :'https://via.placeholder.com/150',  
       currentPlan:{  
           planName :'OTT 499',  
           planPrice :'₹499',  
           validity :'30 days',  
           data :'Unlimited'  
       },  
       transactionHistory:[  
           {  
               planName :'OTT 499',  
               planPrice :'₹499',  
               paymentMethod :'Credit Card',  
               transactionID :'TXN60005',  
               rechargedDateTime :'2025-02-22 10 ;00 ;00'  
           }  
       ]  
   }, 
   {
      name :"Jeff Bezos", 
      mobile :"888 -777 -6666", 
      plan :"Annual 2499", 
      expiration :"2025 -04 -15", 
      location :"Seattle, WA", 
      alternateMobile :"999-000-1111", 
      email :"jeff.bezos@example.com", 
      address :"410 Terry Ave N, Seattle, WA", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"Annual 2499", 
          planPrice :"₹2499", 
          validity :"365 days", 
          data :"2GB/day" 
      }, 
      transactionHistory :[ 
          { 
              planName :"Annual 2499", 
              planPrice :"₹2499", 
              paymentMethod :"Debit Card", 
              transactionID :"TXN60006", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
      ] 
   },
   {
        name: "Mohit Joshi",
        mobile: "999-111-2222",
        plan: "Annual 2999",
        expiration: "2025-04-01",
        location: "Pune, India",
        alternateMobile: "888-222-3333",
        email: "mohit.joshi@techmahindra.com",
        address: "Tech Mahindra, 1st Floor, Global Village, Pune",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "Annual 2999",
            planPrice: "₹2999",
            validity: "365 days",
            data: "3GB/day"
        },
        transactionHistory: [
            {
                planName: "Annual 2999",
                planPrice: "₹2999",
                paymentMethod: "Credit Card",
                transactionID: "TXN70001",
                rechargedDateTime: "2024-12-15 10:00:00"
            }
        ]
    },
    {
        name: "Anand G. Mahindra",
        mobile: "888-000-1111",
        plan: "5G Ultra 599",
        expiration: "2025-03-20",
        location: "Mumbai, India",
        alternateMobile: "",
        email: "anand.mahindra@techmahindra.com",
        address: "Mahindra Towers, Worli, Mumbai, India",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "5G Ultra 599",
            planPrice: "₹599",
            validity: "30 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "5G Ultra 599",
                planPrice: "₹599",
                paymentMethod: "Debit Card",
                transactionID: "TXN70002",
                rechargedDateTime: "2025-02-10 14:30:00"
            }
        ]
    },
    {
        name:"Rohit Anand ",
        mobile:"777 -888 -9999 ",
        plan:"Annual 1999 ",
        expiration:"2025 -04 -01 ",
        location:"Delhi, India ",
        alternateMobile:"6666666666 ",
        email:"rohit.anand@techmahindra.com ",
        address:"Tech Mahindra, Sector 18, Noida, India ",
        profilePicture:"https://via.placeholder.com/150 ",
        currentPlan:{
            planName:"Annual 1999 ",
            planPrice:"₹1999 ",
            validity:"365 days ",
            data:"2GB/day "
        },
       transactionHistory:[
           {
               planName:"Annual 1999 ",
               planPrice:"₹1999 ",
               paymentMethod:"Credit Card ",
               transactionID:"TXN70003 ",
               rechargedDateTime:"2024 -12 -10 10 :00 :00 "
           }
       ]
   },
   {
       name:'Atul Soneja ',
       mobile:'333 -222 -1111 ',
       plan:'5G Ultra 399 ',
       expiration:'2025 -03 -15 ',
       location:'Bangalore, India ',
       alternateMobile:'8888888888 ',
       email:'atul.soneja@techmahindra.com ',
       address:'Tech Mahindra, Global Village, Bangalore ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'5G Ultra 399 ',
           planPrice:'₹399 ',
           validity:'30 days ',
           data:'2GB/day '
       },
       transactionHistory:[
           {
               planName:'5G Ultra 399 ',
               planPrice:'₹399 ',
               paymentMethod:'Debit Card ',
               transactionID:'TXN70004 ',
               rechargedDateAndTime:'2025 -02 -12 14 :15 :00 '
           }
       ]
   },
   {
       name :'Pallavi Katiyar',  
       mobile :'555 -444 -3333',  
       plan :'OTT 499',  
       expiration :'2025 -02 -28',  
       location :'Hyderabad, India',  
       alternateMobile :'4444444444',  
       email :'pallavi.katiyar@techmahindra.com',  
       address :'Tech Mahindra, HITEC City, Hyderabad',  
       profilePicture :'https://via.placeholder.com/150',  
       currentPlan:{  
           planName :'OTT 499',  
           planPrice :'₹499',  
           validity :'30 days',  
           data :'Unlimited'  
       },  
       transactionHistory:[  
           {  
               planName :'OTT 499',  
               planPrice :'₹499',  
               paymentMethod :'Credit Card',  
               transactionID :'TXN70005',  
               rechargedDateTime :'2025-02-22 10 ;00 ;00'  
           }  
       ]  
   }, 
   {
      name :"Dr. Anish Shah", 
      mobile :"888 -777 -6666", 
      plan :"Annual 2499", 
      expiration :"2025 -04 -15", 
      location :"Mumbai, India", 
      alternateMobile :"999-000-1111", 
      email :"anish.shah@techmahindra.com", 
      address :"Tech Mahindra, Worli, Mumbai", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"Annual 2499", 
          planPrice :"₹2499", 
          validity :"365 days", 
          data :"2GB/day" 
      }, 
      transactionHistory :[ 
          { 
              planName :"Annual 2499", 
              planPrice :"₹2499", 
              paymentMethod :"Debit Card", 
              transactionID :"TXN70006", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
      ] 
   },
   {
        name: "Narendra Modi",
        mobile: "999-111-2222",
        plan: "5G Ultra 499",
        expiration: "2025-02-26",
        location: "New Delhi, India",
        alternateMobile: "888-222-3333",
        email: "narendra.modi@pmindia.gov.in",
        address: "South Block, Raisina Hill, New Delhi, India",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "5G Ultra 499",
            planPrice: "₹499",
            validity: "30 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "5G Ultra 499",
                planPrice: "₹499",
                paymentMethod: "Credit Card",
                transactionID: "TXN80001",
                rechargedDateTime: "2025-01-20 10:00:00"
            }
        ]
    },
    {
        name: "Elon Musk",
        mobile: "888-000-1111",
        plan: "OTT 599",
        expiration: "2025-02-26",
        location: "Austin, TX, USA",
        alternateMobile: "",
        email: "elon.musk@tesla.com",
        address: "3500 Deer Creek Road, Palo Alto, CA, USA",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "OTT 599",
            planPrice: "₹599",
            validity: "30 days",
            data: "Unlimited"
        },
        transactionHistory: [
            {
                planName: "OTT 599",
                planPrice: "₹599",
                paymentMethod: "Debit Card",
                transactionID: "TXN80002",
                rechargedDateTime: "2025-01-15 14:30:00"
            }
        ]
    },
    {
        name:"Claudia Sheinbaum ",
        mobile:"777 -888 -9999 ",
        plan:"Annual 1999 ",
        expiration:"2025 -02 -26 ",
        location:"Mexico City, Mexico ",
        alternateMobile:"6666666666 ",
        email:"claudia.sheinbaum@presidencia.gob.mx ",
        address:"Palacio Nacional, Mexico City ",
        profilePicture:"https://via.placeholder.com/150 ",
        currentPlan:{
            planName:"Annual 1999 ",
            planPrice:"₹1999 ",
            validity:"365 days ",
            data:"2GB/day "
        },
       transactionHistory:[
           {
               planName:"Annual 1999 ",
               planPrice:"₹1999 ",
               paymentMethod:"Credit Card ",
               transactionID:"TXN80003 ",
               rechargedDateTime:"2024 -12 -10 10 :00 :00 "
           }
       ]
   },
   {
       name:'Javier Milei ',
       mobile:'333 -222 -1111 ',
       plan:'5G Ultra 399 ',
       expiration:'2025 -02 -26 ',
       location:'Buenos Aires, Argentina ',
       alternateMobile:'8888888888 ',
       email:'javier.milei@presidencia.gob.ar ',
       address:'Casa Rosada, Buenos Aires ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'5G Ultra 399 ',
           planPrice:'₹399 ',
           validity:'30 days ',
           data:'2GB/day '
       },
       transactionHistory:[
           {
               planName:'5G Ultra 399 ',
               planPrice:'₹399 ',
               paymentMethod:'Debit Card ',
               transactionID:'TXN80004 ',
               rechargedDateTime:'2025 -02 -12 14 :15 :00 '
           }
       ]
   },
   {
       name :'Karin Keller-Sutter',  
       mobile :'555 -444 -3333',  
       plan :'OTT 499',  
       expiration :'2025 -02 -26',  
       location :'Bern, Switzerland',  
       alternateMobile :'4444444444',  
       email :'karin.keller-sutter@admin.ch',  
       address :'Federal Palace of Switzerland, Bern',  
       profilePicture :'https://via.placeholder.com/150',  
       currentPlan:{  
           planName :'OTT 499',  
           planPrice :'₹499',  
           validity :'30 days',  
           data :'Unlimited'  
       },  
       transactionHistory:[  
           {  
               planName :'OTT 499',  
               planPrice :'₹499',  
               paymentMethod :'Credit Card',  
               transactionID :'TXN80005',  
               rechargedDateTime :'2025-02-22 10 ;00 ;00'  
           }  
       ]  
   }, 
   {
      name :"Donald Trump", 
      mobile :"888 -777 -6666", 
      plan :"Annual 2499", 
      expiration :"2025 -02 -26", 
      location :"New York City, USA", 
      alternateMobile :"999-000-1111", 
      email :"donald.trump@trumporganization.com", 
      address :"725 Fifth Avenue, New York City, NY", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"Annual 2499", 
          planPrice :"₹2499", 
          validity :"365 days", 
          data :"2GB/day" 
      }, 
      transactionHistory :[ 
          { 
              planName :"Annual 2499", 
              planPrice :"₹2499", 
              paymentMethod :"Debit Card", 
              transactionID :"TXN80006", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
      ] 
   },
   {
      name :"Anthony Albanese", 
      mobile :"999-111-2222", 
      plan :"5G Ultra 299", 
      expiration :"2025 -02 -26", 
      location :"Canberra, Australia", 
      alternateMobile :"888-222-3333", 
      email :"anthony.albanese@pm.gov.au", 
      address :"Parliament House, Canberra, Australia", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"5G Ultra 299", 
          planPrice :"₹299", 
          validity :"30 days", 
          data :"2GB/day" 
      }, 
      transactionHistory :[ 
          { 
              planName :"5G Ultra 299", 
              planPrice :"₹299", 
              paymentMethod :"Credit Card", 
              transactionID :"TXN80007", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
      ] 
   },
   {
      name :"Dick Schoof", 
      mobile :"777-888-9999", 
      plan :"Annual 1999", 
      expiration :"2025 -02 -26", 
      location :"The Hague, Netherlands", 
      alternateMobile :"666-555-4444", 
      email :"dick.schoof@minvws.nl", 
      address :"Ministry of Health, Welfare and Sport, The Hague, Netherlands", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"Annual 1999", 
          planPrice :"₹1999", 
          validity :"365 days", 
          data :"2GB/day" 
      }, 
      transactionHistory : [ 
          { 
              planName :"Annual 1999", 
              planPrice :"₹1999", 
              paymentMethod :"Debit Card", 
              transactionID :"TXN80008", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
        ]
   }   ,
   {
        name: "Angela Merkel",
        mobile: "999-222-3333",
        plan: "5G Ultra 499",
        expiration: "2025-02-26",
        location: "Berlin, Germany",
        alternateMobile: "888-333-4444",
        email: "angela.merkel@example.com",
        address: "Bundeskanzleramt, Berlin, Germany",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "5G Ultra 499",
            planPrice: "₹499",
            validity: "30 days",
            data: "2GB/day"
        },
        transactionHistory: [
            {
                planName: "5G Ultra 499",
                planPrice: "₹499",
                paymentMethod: "Credit Card",
                transactionID: "TXN90001",
                rechargedDateTime: "2025-01-10 09:00:00"
            }
        ]
    },
    {
        name: "Barack Obama",
        mobile: "888-111-2222",
        plan: "OTT 599",
        expiration: "2025-02-26",
        location: "Washington, D.C., USA",
        alternateMobile: "",
        email: "barack.obama@example.com",
        address: "1600 Pennsylvania Ave NW, Washington, D.C.",
        profilePicture: "https://via.placeholder.com/150",
        currentPlan: {
            planName: "OTT 599",
            planPrice: "₹599",
            validity: "30 days",
            data: "Unlimited"
        },
        transactionHistory: [
            {
                planName: "OTT 599",
                planPrice: "₹599",
                paymentMethod: "Debit Card",
                transactionID: "TXN90002",
                rechargedDateTime: "2025-01-15 14:30:00"
            }
        ]
    },
    {
        name:"Greta Thunberg ",
        mobile:"777 -888 -9999 ",
        plan:"Annual 1999 ",
        expiration:"2025 -02 -26 ",
        location:"Stockholm, Sweden ",
        alternateMobile:"6666666666 ",
        email:"greta.thunberg@example.com ",
        address:"Sergels Torg, Stockholm ",
        profilePicture:"https://via.placeholder.com/150 ",
        currentPlan:{
            planName:"Annual 1999 ",
            planPrice:"₹1999 ",
            validity:"365 days ",
            data:"2GB/day "
        },
       transactionHistory:[
           {
               planName:"Annual 1999 ",
               planPrice:"₹1999 ",
               paymentMethod:"Credit Card ",
               transactionID:"TXN90003 ",
               rechargedDateTime:"2024 -12 -10 10 :00 :00 "
           }
       ]
   },
   {
       name:'Lionel Messi ',
       mobile:'333 -222 -1111 ',
       plan:'5G Ultra 399 ',
       expiration:'2025 -02 -26 ',
       location:'Paris, France ',
       alternateMobile:'8888888888 ',
       email:'lionel.messi@psg.fr ',
       address:'Parc des Princes, Paris ',
       profilePicture:'https://via.placeholder.com/150 ',
       currentPlan:{
           planName:'5G Ultra 399 ',
           planPrice:'₹399 ',
           validity:'30 days ',
           data:'2GB/day '
       },
       transactionHistory:[
           {
               planName:'5G Ultra 399 ',
               planPrice:'₹399 ',
               paymentMethod:'Debit Card ',
               transactionID:'TXN90004 ',
               rechargedDateTime:'2025 -02 -12 14 :15 :00 '
           }
       ]
   },
   {
       name :'Cristiano Ronaldo',  
       mobile :'555 -444 -3333',  
       plan :'OTT 499',  
       expiration :'2025 -02 -26',  
       location :'Riyadh, Saudi Arabia',  
       alternateMobile :'4444444444',  
       email :'cristiano.ronaldo@alnassrfc.com',  
       address :'Al Nassr FC Stadium, Riyadh',  
       profilePicture :'https://via.placeholder.com/150',  
       currentPlan:{  
           planName :'OTT 499',  
           planPrice :'₹499',  
           validity :'30 days',  
           data :'Unlimited'  
       },  
       transactionHistory:[  
           {  
               planName :'OTT 499',  
               planPrice :'₹499',  
               paymentMethod :'Credit Card',  
               transactionID :'TXN90005',  
               rechargedDateTime :'2025-02-22 10 ;00 ;00'  
           }  
       ]  
   }, 
   {
      name :"Boris Johnson", 
      mobile :"888 -777 -6666", 
      plan :"Annual 2499", 
      expiration :"2025 -02 -26", 
      location :"London, UK", 
      alternateMobile :"999-000-1111", 
      email :"boris.johnson@parliament.uk", 
      address :"10 Downing Street, London", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"Annual 2499", 
          planPrice :"₹2499", 
          validity :"365 days", 
          data :"2GB/day" 
      }, 
      transactionHistory :[ 
          { 
              planName :"Annual 2499", 
              planPrice :"₹2499", 
              paymentMethod :"Debit Card", 
              transactionID :"TXN90006", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
      ] 
   },
   {
      name :"Michelle Obama", 
      mobile :"999-111-2222", 
      plan :"5G Ultra 299", 
      expiration :"2025 -02 -26", 
      location :"Chicago, IL, USA", 
      alternateMobile :"888-222-3333", 
      email :"michelle.obama@example.com", 
      address :"1600 Pennsylvania Ave NW, Washington, D.C.", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"5G Ultra 299", 
          planPrice :"₹299", 
          validity :"30 days", 
          data :"2GB/day" 
      }, 
      transactionHistory :[ 
          { 
              planName :"5G Ultra 299", 
              planPrice :"₹299", 
              paymentMethod :"Credit Card", 
              transactionID :"TXN90007", 
              rechargedDateTime :"2024-12-20 09 ;30 ;00" 
          } 
      ] 
   },
   {
      name :"Kamala Harris", 
      mobile :"777-888-9999", 
      plan :"Annual 1999", 
      expiration :"2025 -02 -26", 
      location :"Washington, D.C., USA", 
      alternateMobile :"666-555-4444", 
      email :"kamala.harris@vp.gov", 
      address :"1600 Pennsylvania Ave NW, Washington, D.C.", 
      profilePicture :"https://via.placeholder.com/150", 
      currentPlan :{ 
          planName :"Annual 1999", 
          planPrice :"₹1999", 
          validity :"365 days", 
          data :"2GB/day" 
      }, 

     transactionHistory :[ 

         { 

             planName :"Annual 1999", 

             planPrice :"₹1999", 

             paymentMethod :"Debit Card", 

             transactionID :"TXN90008",

             rechargedDateTime : "2024-12-20 09 ;30 ;00" 

         } 

     ] 

   }
   // Additional subscribers can be added in the same format
];



function loadHomeSection() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Home</h2>
        <div class="table-container">
            <h3>Users Expiring Soon</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Plan</th>
                        <th>Expiration</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${subscribersData.filter(subscriber => {
                        const expirationDate = new Date(subscriber.expiration);
                        const today = new Date();
                        const threeDaysFromNow = new Date();
                        threeDaysFromNow.setDate(today.getDate() + 3);
                        return expirationDate <= threeDaysFromNow && expirationDate >= today;
                    }).map(subscriber => `
                        <tr>
                            <td>${subscriber.name}</td>
                            <td>${subscriber.mobile}</td>
                            <td>${subscriber.plan}</td>
                            <td>${subscriber.expiration}</td>
                            <td>${Math.random() > 0.5 ? 'Active' : 'Inactive'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="bento-grid">
            <div class="bento-box">
                <h4>Most Recharged Plans</h4>
                <canvas id="mostRechargedPlansChart"></canvas>
            </div>
            <div class="bento-box">
                <h4>Subscriber Increase Over Time</h4>
                <canvas id="subscriberIncreaseChart"></canvas>
            </div>
            <div class="bento-box">
                <h4>Subscribers by Location</h4>
                <canvas id="subscribersByLocationChart"></canvas>
            </div>
            <div class="bento-box">
                <h4>Subscribers by Plan</h4>
                <canvas id="subscribersByPlanChart"></canvas>
            </div>
        </div>
    `;

    // Prepare data for charts
    const planNames = getAllPlans().map(plan => plan.name);
    const planCounts = {};
    subscribersData.forEach(subscriber => {
        planCounts[subscriber.plan] = (planCounts[subscriber.plan] || 0) + 1;
    });

    const mostRechargedPlansData = {
        labels: Object.keys(planCounts),
        datasets: [{
            label: 'Recharges',
            data: Object.values(planCounts),
            backgroundColor: 'rgba(71, 97, 71, 0.7)',
            borderColor: 'rgba(71, 97, 71, 1)',
            borderWidth: 1
        }]
    };

    const subscriberIncreaseData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Subscribers',
            data: [100, 120, 150, 140, 180, 200], // Dummy data
            borderColor: 'rgba(71, 97, 71, 1)',
            borderWidth: 2,
            fill: false
        }]
    };

    const subscribersByLocationData = {
        labels: ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Jaipur', 'Ahmedabad', 'Lucknow'],
        datasets: [{
            label: 'Subscribers',
            data: [
                subscribersData.filter(s => s.location === 'Mumbai').length,
                subscribersData.filter(s => s.location === 'Delhi').length,
                subscribersData.filter(s => s.location === 'Bangalore').length,
                subscribersData.filter(s => s.location === 'Kolkata').length,
                subscribersData.filter(s => s.location === 'Chennai').length,
                subscribersData.filter(s => s.location === 'Hyderabad').length,
                subscribersData.filter(s => s.location === 'Pune').length,
                subscribersData.filter(s => s.location === 'Jaipur').length,
                subscribersData.filter(s => s.location === 'Ahmedabad').length,
                subscribersData.filter(s => s.location === 'Lucknow').length
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(124, 252, 0, 0.7)',
                'rgba(255, 0, 0, 0.7)',
                'rgba(0, 0, 255, 0.7)',
                'rgba(238, 130, 238, 0.7)'
            ],
            borderWidth: 1
        }]
    };

    const subscribersByPlanData = {
        labels: Object.keys(planCounts),
        datasets: [{
            label: 'Subscribers',
            data: Object.values(planCounts),
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(124, 252, 0, 0.7)',
                'rgba(255, 0, 0, 0.7)',
                'rgba(0, 0, 255, 0.7)',
                'rgba(238, 130, 238, 0.7)'
            ],
            borderWidth: 1
        }]
    };

    // Function to create charts
    function createChart(id, type, data, options = {}) {
        const ctx = document.getElementById(id).getContext('2d');
        return new Chart(ctx, {
            type: type,
            data: data,
            options: options
        });
    }

    // Create charts
    createChart('mostRechargedPlansChart', 'bar', mostRechargedPlansData, {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    });
    createChart('subscriberIncreaseChart', 'line', subscriberIncreaseData);
    createChart('subscribersByLocationChart', 'bar', subscribersByLocationData);
    createChart('subscribersByPlanChart', 'pie', subscribersByPlanData);
}

//Subscriber section
let allSubscribers = [...subscribersData];
let filteredSubscribers = [...allSubscribers];

function loadSubscribers(subscribers) {
    var tableBody = document.getElementById("subscribersTableBody");
    tableBody.innerHTML ="";
subscribers.forEach(subscriber => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${subscriber.name}</td>
            <td>${subscriber.mobile}</td>
            <td>${subscriber.plan}</td>
            <td>${subscriber.location}</td>
            <td><button class="btn btn-primary btn-sm" onclick="viewSubscriberDetails('${subscriber.name}')">View Details</button></td>
        `;
        tableBody.appendChild(row);
    });

     // Populate filter options dynamically
     populateFilterOptions();
}

function populateFilterOptions() {
    const locationFilter = document.getElementById("locationFilter");
    const planFilter = document.getElementById("planFilter");

    // Clear existing options
    locationFilter.innerHTML = '<option value="">All</option>';
    planFilter.innerHTML = '<option value="">All</option>';

    // Get unique locations and plans from subscribersData
    const uniqueLocations = [...new Set(subscribersData.map(subscriber => subscriber.location))];
    const uniquePlans = [...new Set(subscribersData.map(subscriber => subscriber.plan))];

    // Add options to location filter
    uniqueLocations.forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        locationFilter.appendChild(option);
    });

    // Add options to plan filter
    uniquePlans.forEach(plan => {
        const option = document.createElement("option");
        option.value = plan;
        option.textContent = plan;
        planFilter.appendChild(option);
    });
}

function applyFilters() {
    const locationFilter = document.getElementById("locationFilter").value;
    const planFilter = document.getElementById("planFilter").value;

    filteredSubscribers = allSubscribers.filter(subscriber => {
        if (locationFilter && subscriber.location !== locationFilter) {
            return false;
        }
        if (planFilter && subscriber.plan !== planFilter) {
            return false;
        }
        return true;
    });

    loadSubscribers(filteredSubscribers);
}

function clearFilters() {
    document.getElementById("locationFilter").value = "";
    document.getElementById("planFilter").value = "";
    filteredSubscribers = [...allSubscribers];
    loadSubscribers(filteredSubscribers);
}

function searchSubscribers() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    filteredSubscribers = allSubscribers.filter(subscriber => {
        return (
            subscriber.name.toLowerCase().includes(searchTerm) ||
            subscriber.mobile.includes(searchTerm) ||
            subscriber.plan.toLowerCase().includes(searchTerm) ||
            subscriber.location.toLowerCase().includes(searchTerm)
        );
    });

    loadSubscribers(filteredSubscribers);
}

function viewSubscriberDetails(subscriberName) {
    const subscriber = allSubscribers.find(sub => sub.name === subscriberName);
    if (subscriber) {
        const detailsContent = document.getElementById("subscriberDetailsContent");
        detailsContent.innerHTML = `
            <h4>${subscriber.name}</h4>
            <p>Mobile: ${subscriber.mobile}</p>
            <p>Plan: ${subscriber.plan}</p>
            <p>Location: ${subscriber.location}</p>
            <p>Alternate Mobile: ${subscriber.alternateMobile}</p>
            <p>Email: ${subscriber.email}</p>
            <p>Address: ${subscriber.address}</p>
            <img src="${subscriber.profilePicture}" alt="Profile Picture" style="width: 100px; border-radius: 50%;">
            <h5>Current Plan</h5>
            <p>Plan Name: ${subscriber.currentPlan.planName}</p>
            <p>Plan Price: ${subscriber.currentPlan.planPrice}</p>
            <p>Validity: ${subscriber.currentPlan.validity}</p>
            <p>Data: ${subscriber.currentPlan.data}</p>
            <h5>Transaction History</h5>
            <ul>
                ${subscriber.transactionHistory.map(transaction => `
                    <li>
                        Plan Name: ${transaction.planName},
                        Price: ${transaction.planPrice},
                        Payment Method: ${transaction.paymentMethod},
                        Transaction ID: ${transaction.transactionID},
                        Recharged Date: ${transaction.rechargedDateTime}
                    </li>
                `).join('')}
            </ul>
        `;
        document.getElementById("subscriberModal").style.display = "block";
        document.getElementById("subscriberModalBackdrop").style.display = "block";
    }
}

function closeSubscriberDetails() {
    document.getElementById("subscriberModal").style.display = "none";
    document.getElementById("subscriberModalBackdrop").style.display = "none";
}

// // Load all subscribers on initial load
// document.addEventListener("DOMContentLoaded", () => {
//     // Load subscribers only if the subscribers section is active
//     const subscribersSection = document.getElementById('subscribersSection');
//     if (subscribersSection.style.display === 'block') {
//         loadSubscribers(allSubscribers);
//     }
// });



// Plans Section
let filteredPlans = getAllPlans();
function loadPlansSection() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>View Plans</h2>
        <div class="mb-3">
            <label for="planNameFilter" class="form-label">Filter by Plan Name:</label>
            <input type="text" class="form-control" id="planNameFilter" placeholder="Plan Name">
        </div>
        <div class="mb-3">
            <label for="priceFilter" class="form-label">Filter by Price:</label>
            <select class="form-select" id="priceFilter">
                <option value="">All Prices</option>
                <option value="150">Under 150</option>
                <option value="200">Under 200</option>
                <option value="300">Under 300</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="validityFilter" class="form-label">Filter by Validity:</label>
            <select class="form-select" id="validityFilter">
                <option value="">All Validities</option>
                <option value="28">28 days</option>
                <option value="56">56 days</option>
                <option value="84">84 days</option>
                <option value="365">365 days</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="planNameSearch" class="form-label">Search by Plan Name:</label>
            <input type="text" class="form-control" id="planNameSearch" placeholder="Search Plan Name">
        </div>
        <button class="btn btn-primary" onclick = "applyPlanFilters()">Filter</button>
        <div class="table-container">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Validity</th>
                    </tr>
                </thead>
                <tbody id = "plansTableBody">
                    ${filteredPlans.map(plan => `
                        <tr>
                            <td>${plan.name}</td>
                            <td>${plan.price}</td>
                            <td>${plan.validity}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <button class="btn btn-success" onclick="createPlan()">Create Plan</button>
        <button class="btn btn-primary" onclick="updatePlan()">Update Plan</button>
        <button class="btn btn-danger" onclick="deletePlan()">Delete Plan</button>
    `;
}
function createPlan() {
    alert("Create plan functionality will be implemented later!");
}

function updatePlan() {
    alert("Update plan functionality will be implemented later!");
}

function deletePlan() {
    if (confirm("Are you sure you want to delete this plan?")) {
        alert("Plan deleted!");
    }
}

// Feedback Section
function loadFeedbackSection() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Feedback</h2>
        <div class="table-container">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>This is a test feedback message.</td>
                        <td><button class="btn btn-primary" onclick="replyFeedback('john@example.com')">Reply</button></td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Another feedback message from a user.</td>
                        <td><button class="btn btn-primary" onclick="replyFeedback('jane@example.com')">Reply</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// Single implementation of feedback reply
function replyFeedback(email) {
if (!email) {
console.error('Email address is required');
return;
}

try {
window.location.href = `mailto:${email}?subject=Feedback Reply&body=Dear User,`;
} catch (error) {
console.error('Error opening email client:', error);
alert('Unable to open email client. Please try again later.');
}
}

document.addEventListener("DOMContentLoaded", function() {
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.dynamic-content');

function hideAllSections() {
    sections.forEach(section => section.style.display = 'none');
}

function deactivateAllMenuItems() {
    menuItems.forEach(item => item.classList.remove('active'));
}

menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        var targetSection;
        var targetSectionId;
        const sectionKey = this.getAttribute('data-section');

        hideAllSections(); // Hide all sections first
        deactivateAllMenuItems(); // Deactivate all menu items

        this.classList.add('active'); // Activate the current menu item
        console.log(sectionKey);
        targetSectionId = sectionKey + 'Section';
        targetSection = document.getElementById(targetSectionId);
        console.log(targetSectionId);
        console.log(targetSection);
        if (targetSection) {
            targetSection.style.display = 'block'; // Make the selected section visible
        }

        // Load section-specific content
        switch (sectionKey) {
            case 'home':
                loadHomeSection();
                break;
            case 'user': // Use 'user' instead of 'subscribers'
                //document.getElementById("userSection").style.display="block";
                loadSubscribers(allSubscribers);
                break;
            case 'plans':
                loadPlansSection();
                break;
            case 'feedback':
                loadFeedbackSection();
                break;
        }
    });
});

// Load home section by default
document.querySelector('[data-section="home"]').click();

// Add single style element for transitions
const style = document.createElement('style');
style.textContent = `
    #mainContent {
        transition: opacity 20s ease-in-out;
    }
    
    /* Fix footer positioning */
    .footer {
        position: relative;
        width: 100%;
        bottom: 0;
    }
    
    /* Improve responsive layout */
    @media (max-width: 768px) {
        .content {
            margin-left: 0;
            width: 100%;
            padding-bottom: 100px; /* Space for mobile navigation */
        }
        
        .footer {
            margin-bottom: 60px; /* Space for mobile navigation */
        }
            }
`;
document.head.appendChild(style);
});