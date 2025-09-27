# ValuraAI assignment

Assignment demo link and caching functionality screenshot/proof: 
https://drive.google.com/drive/folders/1Gigx6JUM9jXuHyXf8TQiH5PV_PO8V5BC?usp=sharing

- For the assignment I have created a dummy flow for the main page which lists the available stocks or tickers and if you click a particular stock it will take you to the ticker page or stock page. 

- For the stocks API I have used Polygon API v3

- Couldn't fetch the top NASDAQ companies, I came across some issues so I have defined a default list of stocks for fetching the details using Polygon

# Flow 
- In the "Buy" tab you have all the components like "Order Type" selector, "Price" and "Size" selector etc. 
- In the "Sell" tab, it's just a dummy page
- In the header there are two main components, 
   1. "StockSelector" - a component to switch or change the stock available in the list
   2. "MoreButton" - this is a dummy button I created to display the current stock details in a modal box.
- In the body, 
   1. "OrderType" component - to switch between the order types, I used the picker module for this functionality
   2. "Price" and "Size" component - to change the price and size (using a picker)
   3. "Slider" component - used the slider module
   4. "TP/SL" section - if clicked it will display the Take profit and Stop loss components 
- In the bottom section,
 1. "Add funds" button 
 2. "Preview buy" button

# Caching
For caching I have used the local storage or AsyncStorage module. When you switch between the stocks available if that particular stock detail is already stored in the cache then it will use that to display the details if not then it will make a new request. 
Can use Tanstack query for caching but couldn't complete it!



# Expo related instructions
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
