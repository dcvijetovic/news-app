# News App Overview
The News App is designed to fetch and display news articles from different API endpoints depending on category. The app consists of a Home page and a Category pages, each of which sources data from different endpoints.

## Home Page
The Home page retrieves data from the top-headlines endpoint, which is the only endpoint that contains a category field. However, this endpoint does not provide an image for the articles. To address this, a placeholder image from a related task has been used.

## Category Page
The Category page obtains its data from a separate endpoint, distinct from the Home page. This endpoint does include an imageUrl field, providing images for each article.

## Favorites Feature
To enable users to add articles to their Favorites on the Home page, a star icon has been implemented. By clicking on the star icon, users can save an article to their Favorites list.

## Design Considerations
In order to adhere to the original design guidelines, the app has been built strictly according to the provided instructions. However, if allowed more flexibility, an alternative approach would involve creating a dedicated category for Favorites in the menu, instead of displaying them on the Home page. This change would help streamline the user experience and improve app organization.