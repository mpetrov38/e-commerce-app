Implementation Details:
In this task, an e-commerce web application was developed using modern web development technologies. The main components of the application include a sidebar for filtering products, a navigation bar, recommended products section, a main product listing, a cart component, and a footer. The application is designed to provide users with an interactive shopping experience.

Technologies Used:
React: The application was built using React, providing the basis for creating component-driven UI.
React Router DOM: This was used to manage routing within the application, allowing for seamless navigation between the main product page and the cart.
React Bootstrap: Was used to develop responsive UI components and grid layouts.
React Icons: A library to integrate icons into the application.
React Toastify: Used for displaying notifications and alerts to the user.
Bootstrap: Was employed to leverage pre-built CSS classes and components for quicker development.

How It Was Achieved:
Product Listing: The Products component was used to list available products. This component incorporated load more functionality and managed the responsiveness.
Cart Management: The Cart component was developed to manage the user’s cart items. It includes the ability to change quantity, calculate total price, and proceed to checkout.
Filtering and Navigation: The Sidebar and Navigation components were used to allow product filtering and search.
Recommendations: The Recomended component displays recommended products.
Routing: The application utilizes react-router-dom to define the main route and cart route.
Responsiveness: CSS classes from Bootstrap were employed to make the application fully responsive across different screen sizes.

Challenges:
Responsiveness: Ensuring that the title and content did not shift at lower resolutions required meticulous adjustments to the styling.
Scroll Behavior: Controlling the scroll behavior when loading more items, particularly disabling it in mobile view, required custom logic.
Local Storage Management: The cart state had to be managed using local storage, which introduced complexity in synchronizing state across different parts of the application.
Integrating Libraries: Making use of various libraries required understanding their individual functionalities and how they could be integrated to work together in the application.
Advanced Filtering: Honestly i struggled on this part, I had to change the structure of the data multiple times including the filtering logic, how to properly pass props to other components.
