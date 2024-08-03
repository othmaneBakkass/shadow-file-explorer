# How to Add Files to be Downloaded ?

## Public Folder

inside the project you will find a folder named public inside it put the files to be downloaded

*currently only .exe and .zip file format are supported*

## link the file with the download button

for the download button to work you need to go into the *components* folder inside *src* you will find folders.
representing sections of the page go to each of the folders that have a download button.

### for example

* hero
* features
* cta
* download-options

inside of each of those folders you will find an index file.
inside that file you will find **"<DownloadBtn \/>"** or **"<DownloadLink \/>"** those are what we call *components*.

those components will have an attribute called fileName give it a value that value should be the name of the file you want people to download and it is the file that you've put inside of the public folder

#### for example

let say I have a file called test.exe inside the public folder for me to let people download it I will go the hero folder click on the index file then search for **"<DownloadBtn \/>"** it will have a fileName attribute then I will write fileName="test.exe" and that it now people can download test.exe

# How to Add files formats ?

in the root of the project you will find a file named
astro.config.mjs click on it and you will see a line with the word assetsInclude it will be something like this:

```js
export default defineConfig({
 ///
 assetsInclude: ["**/*.exe", "**/*.zip"],
 ///
});
```

in assetsInclude list add this string with the file format you want ,"\*\*/\*.fileformat"

for example:

```js
export default defineConfig({
 ///
 assetsInclude: ["**/*.exe", "**/*.zip", "**/*.png"],
 ///
});
```
