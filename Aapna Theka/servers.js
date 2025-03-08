const http = require('http');
const qs = require('querystring');
const fs = require('fs'); // Import fs to read files

// Handle errors
function handleError(res, errorCode, message) {
    res.statusCode = errorCode;
    res.write(message);
    res.end();
}

// Create HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(`Request method: ${req.method} | URL: ${req.url}`);

    if (req.method == 'GET') {
        if (req.url == '/') {
            res.write(loginPage);
            res.end();
        } else if (req.url == '/homepage') {
            res.write(homepage);
            res.end();
            // Serve the homepage
            // fs.readFile('./homepage.html', (err, data) => {
            //     if (err) {
            //         handleError(res, 500, 'Error loading homepage');
            //     } else {
            //         res.write(data);
            //         res.end();
            //     }
            // });
        } 

        // Homepage 
        else if (req.url === '/beer.jpg') {
                    fs.readFile('./beer.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
        else if (req.url === '/beer') {
                    res.write(beer);
                    res.end();
                    // fs.readFile('./beer.html', (err, data) => {
                    //     if (err) {
                    //         handleError(res, 500, 'Error loading beer');
                    //     } else {
                    //         res.write(data);
                    //         res.end();
                    //     }
                    // });
                }
                else if (req.url === '/vodka') {
                    res.write(vodka);
                    res.end();
                }
                else if (req.url === '/vodka.jpg') {
                    fs.readFile('./vodka.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/wine.jpg') {
                    fs.readFile('./wine.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/wine') {
                    res.write(wine);
                    res.end();
                }
                else if (req.url === '/whiskey.jpg') {
                    fs.readFile('./whiskey.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/whiskey') {
                    res.write(whiskey);
                    res.end();
                }
                else if (req.url === '/rum.jpg') {
                    fs.readFile('./rum.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/rum') {
                    res.write(rum);
                    res.end();
                }
                else if (req.url === '/gin.jpg') {
                    fs.readFile('./gin.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/gin') {
                    res.write(gin);
                    res.end();
                }
                else if (req.url === '/champagne') {
                    res.write(champagne);
                    res.end();
                }
                else if (req.url === '/champagne.jpg') {
                    fs.readFile('./champagne.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/homepagevideo.mp4') {
                    fs.readFile('./homepagevideo.mp4', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/aboutusvideo.mp4') {
                    fs.readFile('./aboutusvideo.mp4', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                
                // Beer Page
                else if (req.url === '/Canon1000.jpg') {
                    fs.readFile('./Canon1000.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Carlsberg.jpg') {
                    fs.readFile('./Carlsberg.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Premium.jpg') {
                    fs.readFile('./Premium.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Select.jpg') {
                    fs.readFile('./Select.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Silver.jpg') {
                    fs.readFile('./Silver.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Strong.jpg') {
                    fs.readFile('./Strong.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Strong1.jpg') {
                    fs.readFile('./Strong1.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Supreme.jpg') {
                    fs.readFile('./Supreme.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Ultra.jpg') {
                    fs.readFile('./Ultra.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/UltraMax.jpg') {
                    fs.readFile('./UltraMax.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Zero.jpg') {
                    fs.readFile('./Zero.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                

                // Vodka Page
                else if (req.url === '/absolutevodka.jpg') {
                    fs.readFile('./absolutevodka.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/BELUGA.jpg') {
                    fs.readFile('./BELUGA.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/belvedere.jpg') {
                    fs.readFile('./belvedere.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/belvedere-lake-bartezek.jpg') {
                    fs.readFile('./belvedere-lake-bartezek.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/CIROC.jpg') {
                    fs.readFile('./CIROC.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/GREYGOOSE.jpg') {
                    fs.readFile('./GREYGOOSE.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/KETELONE.jpg') {
                    fs.readFile('./KETELONE.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/SKYYVODKA.jpg') {
                    fs.readFile('./SKYYVODKA.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/SMIRNOFF.jpg') {
                    fs.readFile('./SMIRNOFF.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/STOLICHNANYA.jpg') {
                    fs.readFile('./STOLICHNANYA.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }

                // Whiskey Page
                else if (req.url === '/tutorial') {
                    fs.readFile('./tutorial.html', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/tutorial.mp4') {
                    fs.readFile('./tutorial.mp4', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                
                else if (req.url === '/antiqity.jpeg') {
                    fs.readFile('./antiqity.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/blackdog.jpeg') {
                    fs.readFile('./blackdog.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/bluelabel.jpeg') {
                    fs.readFile('./bluelabel.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/blackandwhite.jpeg') {
                    fs.readFile('./blackandwhite.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/GLENDFIDDITCH15.jpeg') {
                    fs.readFile('./GLENDFIDDITCH15.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/redlabel.jpeg') {
                    fs.readFile('./redlabel.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/royalstag.jpeg') {
                    fs.readFile('./royalstag.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/teachers.jpeg') {
                    fs.readFile('./teachers.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/vat69.jpeg') {
                    fs.readFile('./vat69.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/SIGANTURE.jpeg') {
                    fs.readFile('./SIGANTURE.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }

                // Champagne Page
                else if (req.url === '/billecartsalmon.jpeg') {
                    fs.readFile('./billecartsalmon.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/jacquart.jpeg') {
                    fs.readFile('./jacquart.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/laurentperrier.jpeg') {
                    fs.readFile('./laurentperrier.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/jew.jpeg') {
                    fs.readFile('./jew.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/moetandchandon.jpeg') {
                    fs.readFile('./moetandchandon.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/Vietti.jpeg') {
                    fs.readFile('./Vietti.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/villasandi.jpeg') {
                    fs.readFile('./villasandi.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }

                // Gin Page
                else if (req.url === '/tanqueraynoten.jpg') {
                    fs.readFile('./tanqueraynoten.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/bombaybramble.jpg') {
                    fs.readFile('./bombaybramble.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/berthasrevenge.jpg') {
                    fs.readFile('./berthasrevenge.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/hendricksamazonia.jpg') {
                    fs.readFile('./hendricksamazonia.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/methodandmadness.jpg') {
                    fs.readFile('./methodandmadness.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/tanquerayno10citrusheartgrapefruitandrosemary.jpg') {
                    fs.readFile('./tanquerayno10citrusheartgrapefruitandrosemary.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/thebotanistislaydry.jpg') {
                    fs.readFile('./thebotanistislaydry.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                

                // Wine Page
                else if (req.url === '/twooceansshiraz.jpeg') {
                    fs.readFile('./twooceansshiraz.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/donnafugatasedarasicilia.jpeg') {
                    fs.readFile('./donnafugatasedarasicilia.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/renierirossodimontalcinodoc.jpeg') {
                    fs.readFile('./renierirossodimontalcinodoc.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/pontingcloseofplaycabernetsauvignon.jpeg') {
                    fs.readFile('./pontingcloseofplaycabernetsauvignon.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/pontingthepinnacleshiraz.jpeg') {
                    fs.readFile('./pontingthepinnacleshiraz.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/chapoutiermariusrouge.jpeg') {
                    fs.readFile('./chapoutiermariusrouge.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/chateaulaubesbordeaux.jpeg') {
                    fs.readFile('./chateaulaubesbordeaux.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/izadicrianzatempranello.jpeg') {
                    fs.readFile('./izadicrianzatempranello.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                

                // Rum Page
                else if (req.url === '/dunderhead.jpeg') {
                    fs.readFile('./dunderhead.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/ronzacapacentenariosistemasolera23.jpeg') {
                    fs.readFile('./ronzacapacentenariosistemasolera23.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/chairmansreservespiced.jpg') {
                    fs.readFile('./chairmansreservespiced.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/rumbullion.jpeg') {
                    fs.readFile('./rumbullion.jpeg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/diplomaticoreservaexclusiva.jpg') {
                    fs.readFile('./diplomaticoreservaexclusiva.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                else if (req.url === '/kakiragold.jpg') {
                    fs.readFile('./kakiragold.jpg', (err, data) => {
                        if (err) {
                            handleError(res, 500, 'Error loading beer');
                        } else {
                            res.write(data);
                            res.end();
                        }
                    });
                }
                
        else {
            handleError(res, 404, 'Route not found');
        }
    } else if (req.method == 'POST') {
        if (req.url == '/login') {
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            req.on('end', () => {
                console.log('Received Body:', body)
                let obj = qs.parse(body);
                console.log('Parsed Object:', obj)
                let uname = obj.uname;
                let upwd = obj.upwd;

                if (uname == 'admin' && upwd == 'admin') {
                    res.write(homepage);
                    res.end();
                } else {
                    res.write(`
                        <script>
                            alert('Login Failed! Redirecting to Sign Up');
                            document.querySelector('#container').classList.add('active');
                        </script>
                    `);
                    res.end();
                }
            });
        } else {
            handleError(res, 404, 'Route not found');
        }
    } else {
        handleError(res, 404, 'Invalid Method');
    }
});



// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


// Login Page HTML with updated logic
let loginPage = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <title>Login & Register Page</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
        }

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
        }

        .container {
            background: rgb(238, 174, 202);
            background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(198, 201, 201, 1) 100%, rgba(148, 233, 198, 1) 100%);
            border-radius: 30px;
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.35);
            position: relative;
            overflow: hidden;
            width: 768px;
            max-width: 100%;
            min-height: 480px;
        }

        .container p {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.3px;
            margin: 20px 0;
        }

        .container span {
            font-size: 12px;
        }

        .container a {
            color: #333;
            font-size: 13px;
            text-decoration: none;
            margin: 15px 0 10px;
        }


        .container button {
            background: rgb(238,174,202);
            background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(201,198,200,1) 100%, rgba(148,233,198,1) 100%);
            font-size: 12px;
            padding: 10px 45px;
            border: 1px solid transparent;
            border-radius: 8px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-top: 10px;
            cursor: pointer;
        }

        .container button.hidden {
            background-color: transparent;
            border-color: #fff;
        }


        .container form {
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 40px;
            height: 100%;
        }

        .container input {
            background-color: #eee;
            border: none;
            margin: 8px 0;
            padding: 10px 15px;
            font-size: 13px;
            border-radius: 8px;
            width: 100%;
            outline: none;
        }

        .form-container {
            position: absolute;
            top: 0;
            height: 100%;
            transition: all 0.6s ease-in-out;
        }

        .sign-in {
            left: 0;
            width: 50%;
            z-index: 2;
        }

        .container.active .sign-in {
            transform: translateX(100%);
        }

        .sign-up {
            left: 0;
            width: 50%;
            opacity: 0;
            z-index: 1;
        }

        .container.active .sign-up {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: move 0.6s;
        }

        @keyframes move {
            0%, 49.99% {
                opacity: 0;
                z-index: 1;
            }
            50%, 100% {
                opacity: 1;
                z-index: 5;
            }
        }

        .toggle-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: all 0.6s ease-in-out;
        border-radius: 20px;
        z-index: 1000;
    }

    .container.active .toggle-container {
        transform: translateX(-100%);
        border-radius: 20px;
    }

    .toggle {
        background: rgb(238,174,202);
        background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(198,201,201,1) 100%, rgba(148,233,198,1) 100%);
        height: 100%;
        color: #fff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;
    }

    .container.active .toggle {
        transform: translateX(50%);
    }

    .toggle-panel {
        position: absolute;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 30px;
        text-align: center;
        top: 0;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;
    }

    .toggle-left {
        transform: translateX(-200%);
    }

    .container.active .toggle-left {
        transform: translateX(0);
    }

    .toggle-right {
        right: 0;
        transform: translateX(0);
    }

    </style>
</head>

<body>

    <div class="container" id="container">
        <div class="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" required>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <button type="submit">Sign Up</button>
            </form>
        </div>

        <div class="form-container sign-in">
            <form id="signInForm">
                <h1>Sign In</h1>
                <input type="text" placeholder="Username" id="loginUsername" required>
                <input type="password" placeholder="Password" id="loginPassword" required>
                <button type="submit" id="loginBtn">Sign In</button>
            </form>
        </div>

        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome To <br>Aapna Theka</h1>
                    <p>Sign in With ID & Password</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hi Users</h1>
                    <p>Join "Aapna Theka" to get good quality alcohol delivered at home.</p>
                    <button class="hidden" id="register"><a href="/homepage">Sign Up</a></button>
                </div>
            </div>
        </div>


    </div>

    <script>
        // Login Logic
        document.getElementById('signInForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            if (username === 'admin' && password === 'admin') {
                window.location.href = '/homepage';
            } else {
                document.getElementById('container').classList.add('active');
            }
        });
    </script>
</body>

</html>
`;


// Home Page HTML
let homepage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aapna Theka</title>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <style>
    /* Reset margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body styling */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* Navbar Styling */
.navbar {
    background-color: #333;
    padding: 10px;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar .navbar-brand {
    color: #FFD700;
    font-size: 40px;
}

.nav-links {
    list-style: none;
}

.nav-links li {
    display: inline;
    margin-left: 20px;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

.nav-links a:hover {
    text-decoration: underline;
}

/* Home Section */
#home {
    text-align: center;
    padding: 50px 20px;
}

#home h1 {
    font-size: 40px;
    margin-bottom: 20px;
    color: blue;
}

#home h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: purple;
}

#home p {
    font-size: 18px;
    line-height: 1.6;
    color: #e10e0e;
}

/* Product Section */
#products {
    padding: 40px 20px;
}

#home {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust the height as needed */
  overflow: hidden;
}
#home #bgVideo {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
}
#home .container3 {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  margin: 150px 150px;
}

/* Main Drinks Heading */
#products h1 {
    font-size: clamp(40px, 8vw, 60px); /* Responsive font size */
    font-weight: bold;
    color: #FFD700; /* Golden Yellow */
    text-align: center;
    text-transform: uppercase;
    position: relative;
    margin: 0 auto 50px auto; /* Center and add spacing */
    max-width: 99%; /* Prevent heading from exceeding the screen */
    perspective: 500px; /* Adds a 3D effect */
    animation: floatEffect 3s ease-in-out infinite;
    word-wrap: break-word; /* Ensures text wraps if needed */
    line-height: 1.2; /* Better spacing between lines */
  }
  
  /* Layered Shadow Effect */
  #products h1::before {
    content: "Drinks"; /* Shadow layer text */
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    color: rgba(255, 215, 0, 0.6); /* Softer Golden Yellow */
    z-index: -1;
    transform: rotateX(15deg) skewX(10deg); /* 3D depth effect */
    filter: blur(4px);
  }
  
  /* Glowing Golden Border */
  #products h1::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 3px solid rgba(255, 223, 0, 0.8); /* Bright Golden Yellow */
    border-radius: 10px;
    animation: glowPulse 2s infinite;
    z-index: -2;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 223, 0, 0.8);
  }
  
  /* Floating Animation */
  @keyframes floatEffect {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  /* Golden Glow Animation */
  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 223, 0, 0.8);
    }
    50% {
      box-shadow: 0 0 25px rgba(255, 255, 0, 1), 0 0 40px rgba(255, 239, 0, 1);
    }
  }


.container4 {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.product {
    padding-left: 30px;
    display: flex;
    align-items: center;
    gap: 60px;
}

.product.reverse {
    padding-right: 30px;
    justify-content: right;
    align-items: center; /* Align items vertically in the center */
    gap: 60px; /* Maintain spacing between description and image */
}


.product img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.description {
    max-width: 800px;
}

.description h5 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.description p {
    font-size: 1em;
    color: #333;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .product {
        flex-direction: column; /* Stack items vertically for smaller screens */
    }

    .product.reverse {
        flex-direction: column; /* No need for reverse on mobile */
    }

    .product img {
        width: 100%;
        height: auto;
    }
}

/* Style for the "Buy Now" button */
.buy-now {
    background-color: #FFD700; /* Gold color for the button */
    color: #000; /* Black text */
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px; /* Space between the product description and button */
  }
  
  .buy-now:hover {
    background-color: #FF8C00; /* Darker gold color on hover */
    transform: translateY(-2px); /* Slight upward movement on hover */
  }
  
  .buy-now:active {
    background-color: #e67e22; /* Slightly darker color when the button is clicked */
    transform: translateY(1px); /* Slight downward movement on click */
  }
  
  .buy-now:focus {
    outline: none; /* Remove default outline */
    box-shadow: 0 0 5px 2px rgba(255, 140, 0, 0.5); /* Glow effect on focus */
  }
  

/* About Section */
#about {
    padding: 40px 20px;
}

#about h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
    color: orange;
}

#about p {
    text-align: center;
    font-size: 18px;
    line-height: 1.8;
    padding-left: 200px;
    padding-right: 200px;
}

#about {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust the height as needed */
  
}
#about #bgVideo {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 96.5%;
  min-height: 96.5%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
}
#about .container2 {
  position: relative;
  z-index: 1;
  color: yellow;
  text-align: center;
}


/* Contact Section */
#contact {
    background-color: #fff;
    padding: 50px 20px;
}

.flex-container {
    display: flex;
    justify-content: space-between;
}

.left-section {
    flex: 1;
    padding: 20px;
}

.right-section {
    flex: 1;
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

form .form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

form .form-row div {
    width: 48%;
}

form label {
    font-size: 16px;
    margin-bottom: 5px;
}

form input,
form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
}

form button {
    padding: 10px 20px;
    background-color: #FFD700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background-color: #FFBF00;
}

/* Media Queries for Mobile Devices */
@media (max-width: 768px) {
    #category-section {
        grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
    }

    .navbar .nav-links {
        display: block;
        text-align: center;
    }

    .flex-container {
        flex-direction: column;
    }

    .left-section,
    .right-section {
        flex: 1 100%;
        padding: 10px;
    }
}
  </style>
</head>
<body>

  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#" style="color: #FFD700; font-size: 40px; top: 2px;"><strong>Aapna Theka</strong></a>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </nav>


  <!-- Home Section -->
  <section id="home">
    <video autoplay muted loop id="bgVideo">
      <source src="/homepagevideo.mp4" type="video/mp4">
    </video>
    <div class="container3">
      <h1>Welcome to Aapna Theka</h1>
      <h3>Pouring Perfection in Every Pint</h3>
      <p><strong>Welcome to Aapna Theka, your premier destination for quality liquors from around the world. Whether you're an enthusiast or just looking to try something new, we offer a carefully selected range of spirits, wines, and beers to elevate your experience. Discover our rotating menu of best-selling and exclusive products, and find your perfect drink today. Cheers to great spirits and memorable moments!</strong></p>
    </div>
  </section>

  <!-- Category Section -->
  <section id="products" class="section">
    <h1>Drinks</h1>
    <div class="container4">
        <div class="product">
            <img src="beer.jpg" alt="Beer">
            <div class="description">
                <h5>Beer</h5>
                <p>Beer is one of the oldest and most widely consumed alcoholic drinks, made from barley, hops, yeast, and water. Its flavors can range from light and refreshing to rich and robust, with countless varieties such as lagers, ales, stouts, and IPAs to suit all tastes.</p>
                <button class="buy-now"><a href="/beer">Buy Now</a></button>
            </div>
        </div>
        <div class="product reverse">
            <div class="description">
                <h5>Vodka</h5>
                <p>Vodka is a clear, distilled spirit known for its smoothness and versatility in cocktails. Made primarily from grains or potatoes, it has a neutral flavor that blends well in drinks like the classic Moscow Mule or a Bloody Mary.</p>
                <button class="buy-now"><a href="/vodka">Buy Now</a></button>
            </div>
            <img src="vodka.jpg" alt="Vodka">
        </div>
        <div class="product">
            <img src="wine.jpg" alt="Wine">
            <div class="description">
                <h5>Wine</h5>
                <p>Wine is a sophisticated beverage crafted from fermented grapes or other fruits, offering a wide spectrum of flavors and aromas. Red, white, rosé, and sparkling wines each bring unique characteristics, making it the perfect accompaniment to a variety of cuisines.</p>
                <button class="buy-now"><a href="/wine">Buy Now</a></button>
            </div>
        </div>
        <div class="product reverse">
            <div class="description">
                <h5>Whiskey</h5>
                <p>Whiskey is a rich, distilled spirit made from fermented grains, aged in wooden barrels, which imparts deep flavors like caramel, vanilla, and oak. Varieties such as Scotch, Bourbon, and Irish whiskey have distinct qualities, offering a smooth, warming experience.</p>
                <button class="buy-now"><a href="/whiskey">Buy Now</a></button>
            </div>
            <img src="whiskey.jpg" alt="Whiskey">
        </div>
        <div class="product">
            <img src="rum.jpg" alt="Rum">
            <div class="description">
                <h5>Rum</h5>
                <p>Rum is a sweet, distilled spirit made from sugarcane byproducts like molasses or cane juice. Available in light, dark, spiced, and aged varieties, rum adds a tropical flair to cocktails like the Mojito or Piña Colada.</p>
                <button class="buy-now"><a href="/rum">Buy Now</a></button>
            </div>
        </div>
        <div class="product reverse">
            <div class="description">
                <h5>Gin</h5>
                <p>Gin is a distilled spirit flavored with juniper berries and other botanicals. Known for its crisp, aromatic profile, gin is the base of many classic cocktails, such as the Gin & Tonic or Martini, making it a favorite for those who appreciate a fragrant, herbal taste.</p>
                <button class="buy-now"><a href="/gin">Buy Now</a></button>
            </div>
            <img src="gin.jpg" alt="Gin">
        </div>
        <div class="product">
            <img src="champagne.jpg" alt="Champagne">
            <div class="description">
                <h5>Champagne</h5>
                <p>Champagne is a sparkling wine produced in the Champagne region of France, made primarily from Pinot Noir, Chardonnay, and Pinot Meunier grapes. Known for its light, bubbly texture and crisp flavor, Champagne is the drink of celebration and luxury.</p>
                <button class="buy-now"><a href="/champagne">Buy Now</a></button>
            </div>
        </div>
    </div>
</section>


  <!-- About Us Section -->
  <section id="about" class="section">
    <video autoplay muted loop id="bgVideo">
      <source src="/aboutusvideo.mp4" type="video/mp4">
    </video>
    <div class="container2">
        <h2 class="text-center">About Us</h2>
        <p class="text-center"><strong>
            Welcome to Aapna Theka, where our journey into the world of exceptional liquors began over a decade ago. Our story is one of dedication, craftsmanship, and a deep appreciation for fine spirits.
        </strong></p>
        <p class="text-center">
            <strong style="font-size: 23px;">Our Journey</strong><br>
            Founded in 2012, Aapna Theka started as a small, family-owned shop with a vision to bring the finest and most diverse selection of liquors to our community. Our founders, a group of spirit enthusiasts with decades of collective experience, aimed to create a space where people could explore, taste, and appreciate the rich world of alcohol.
        </p>
        <p class="text-center">
            <strong style="font-size: 23px;">Our Evolution</strong><br>
            From our humble beginnings, we’ve grown significantly. What started as a modest store has evolved into a premier destination for liquor lovers. We’ve expanded our offerings to include a wide range of international and local spirits, each chosen for its unique flavor profile and quality.
        </p>
        <p class="text-center">
            <strong style="font-size: 23px;">Our Commitment</strong><br>
            At Aapna Theka, we’re committed to offering not just liquors, but experiences. Our rotating selection of best-selling and exclusive products is carefully curated to ensure that every visit brings something new and exciting. Our knowledgeable staff is always on hand to guide you through our selection, answer your questions, and help you find the perfect drink for any occasion.
        </p>
        <p class="text-center" style="font-size: 30px;">
            <strong>Cheers, The Aapna Theka Team</strong>
        </p>
    </div>
</section>


  <!-- Contact Section -->
  <section id="contact">
    <div class="container1">
      <div class="flex-container">
        <div class="left-section">
          <h1><strong>Get in Touch!</strong></h1>
          <p><strong>If you have any questions about our products or would be interested in stocking us, please complete the form and a member of our team will be in touch.</strong></p>
        </div>
    
        <div class="right-section">
          <form>
            <div class="form-row">
              <div>
                <label for="firstName"><strong>First Name</strong></label>
                <input type="text" id="firstName" name="firstName">
              </div>
              <div>
                <label for="lastName"><strong>Last Name</strong></label>
                <input type="text" id="lastName" name="lastName">
              </div>
            </div>
            <div>
              <label for="email"><strong>Email (required)</strong></label>
              <input type="email" id="email" name="email">
            </div>
            <div>
              <label for="message"><strong>Message (required)</strong></label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <script src="homepage.js"></script>
</body>
</html>
`;

let beer = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beer</title>
    <!-- <link rel="stylesheet" href="Beer.css"> -->
    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fdf6e3; /* Light beige background */
            color: #333;
            line-height: 1.6;
        }

        /* Navbar Styling */
        .navbar {
            background-color: #333;
            padding: 10px;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .navbar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .navbar .navbar-brand {
            color: #FFD700;
            font-size: 20px;
        }

        .nav-links {
            list-style: none;
        }

        .nav-links li {
            display: inline;
            margin-left: 20px;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            font-size: 18px;
        }

        .nav-links a:hover {
            text-decoration: underline;
        }


        /* Header Styles */
        header {
            background-color: #d4af37; /* Golden background */
            color: #fff;
            text-align: center;
            padding: 1px;
            border-bottom: 3px solid #b8860b;
        }

        header h1 {
            margin: 0;
            font-size: 3rem;
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px #8b4513;
        }

        /* Section Titles */
        h2 {
            color: #b8860b;
            text-align: center;
            margin-left: 50%;
            font-size: 2rem;
            margin-top: 20px;
            text-transform: uppercase;
            border-bottom: 2px solid #d4af37;
            display: inline-block;
            padding-bottom: 5px;
            transform: translateX(-50%);
        }

        /* Paragraph Styles */
        p {
            max-width: 1300px;
            margin: 0 auto 20px auto;
            padding: 0 15px;
            text-align: justify;
        }

        /* Product Section */
        #products {
            padding: 20px 0;
            background-color: #fff8dc; /* Light gold background for product section */
        }

        /* Product Container */
        .product-container {
            display: flex;
            flex-direction: column;
            gap: 0px;
            padding-left: 60px;
            align-items: flex-start; /* Align to start of container */
        }

        /* Product Item Styles */
        .product-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 50px;
            width: 95%;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        /* .product-item:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        } */

        /* Image Styles */
        .product-image {
            flex: 0 0 250px; /* Fixed width for the image */
            margin-right: 20px;
            padding-top: 50px;
        }

        .product-image img {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
        }

        /* Product Details Styles */
        .product-details {
            flex: 1; /* Allow details to take up remaining space */
            padding-left: 50px;
        }

        .product-details h5 {
            color: #8b4513;
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .quantity {
            margin-bottom: 10px;
            margin-left: 20px;
        }

        .quantity input {
            padding: 5px;
            width: 60px;
            margin-left: 10px;
        }

        .rate {
            margin-bottom: 10px;
            margin-left: 6px;
        }

        .add-to-cart {
            background-color: #d4af37;
            color: white;
            border: none;
            margin-left: 20px;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            width: 12%;
            transition: background-color 0.3s ease;
        }

        .add-to-cart:hover {
            background-color: #b8860b;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 1.8rem;
            }

            p {
                padding: 0 10px;
            }

            .product-item {
                flex-direction: column; /* Stack product details below the image on small screens */
                align-items: center; /* Center the items */
            }

            .product-image {
                margin-right: 0;
                margin-bottom: 15px; /* Space between image and product details */
            }

            .add-to-cart {
                width: auto;
            }
        }

    </style>
</head>
<body>
    <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#" style="color: #FFD700; font-size: 40px; top: 2px;"><strong>Aapna Theka</strong></a>
      <ul class="nav-links">
        <li><a href="/homepage">Home</a></li>
        <li><a href="#history">History</a></li>
        <li><a href="#products">Products</a></li>
      </ul>
    </div>
  </nav>



    <header>
        <h1>Beer</h1>
    </header>

    <section id="history">
        <h2>History</h2>
        <p>
            Beer is one of the oldest beverages in human history, dating back to at least 5,000 BCE, 
            with evidence found in ancient Sumerian and Mesopotamian civilizations. Early beer was brewed as a result of 
            fermenting grains like barley and wheat, often combined with water and naturally occurring yeast. In ancient 
            cultures, beer was not just a drink but a staple of daily life, used for religious ceremonies, social 
            gatherings, and even as a form of currency. During the Middle Ages, brewing became an essential craft, with 
            monasteries leading the way in refining recipes and brewing techniques. The Industrial Revolution further 
            transformed beer production, introducing mechanization, refrigeration, and improved brewing processes, making 
            it widely accessible. Today, beer has evolved into a global phenomenon with diverse styles and flavors, 
            reflecting centuries of tradition and innovation.
        </p>
    </section>


    <section id="products">
        <h2>Products</h2>
        <div class="product-container">
            <div class="product-item">
                <div class="product-image">
                    <img src="Select.jpg" alt="Budweiser Select">
                </div>
                <div class="product-details">
                    <h5>Budweiser Select</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Silver.jpg" alt="Heineken Silver">
                </div>
                <div class="product-details">
                    <h5>Heineken Silver</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Zero.jpg" alt="Budweiser Zero">
                </div>
                <div class="product-details">
                    <h5>Budweiser Zero</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div><div class="product-item">
                <div class="product-image">
                    <img src="Strong1.jpg" alt="Tuborg Strong">
                </div>
                <div class="product-details">
                    <h5>Tuborg Strong</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Premium.jpg" alt="Kingfisher Premium">
                </div>
                <div class="product-details">
                    <h5>Kingfisher Premium</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Supreme.jpg" alt="Budweiser Supreme">
                </div>
                <div class="product-details">
                    <h5>Budweiser Supreme</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Ultra.jpg" alt="Kingfisher Ultra">
                </div>
                <div class="product-details">
                    <h5>Kingfisher Ultra</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="UltraMax.jpg" alt="Ultra Max">
                </div>
                <div class="product-details">
                    <h5>Ultra Max</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Strong.jpg" alt="Kingfisher Strong">
                </div>
                <div class="product-details">
                    <h5>Kingfisher Strong</Strong></h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Carlsberg.jpg" alt="Carlsberg">
                </div>
                <div class="product-details">
                    <h5>Carlsberg</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Canon1000.jpg" alt="Canon1000">
                </div>
                <div class="product-details">
                    <h5>Canon1000</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <!-- Repeat for other products -->
        </div>
    </section>
</body>
</html>
`;

let vodka = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vodka</title>
    <!-- <link rel="stylesheet" href="vodka.css"> -->
     <style>
        /* General Styles */
body {
    font-family: 'Georgia', serif; /* Elegant serif font for a distinct feel */
    margin: 0;
    padding: 0;
    background-color: #f4f4f9; /* Light lavender-gray background */
    color: #2c2c34; /* Dark text color */
}

/* Navigation Bar */
.navbar {
    background-color: #800000; /* Deep burgundy */
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
}

.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 15px;
}

.nav-links a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #ffcccb; /* Light pink hover effect */
}

/* Header Section */
header {
    background-color: #ffcccb; /* Light pink background */
    color: #800000; /* Deep burgundy text */
    text-align: center;
    padding: 10px 0;
    border-bottom: 4px solid #800000;
}

header h1 {
    margin: 0;
    font-size: 2.8rem;
    font-family: 'Palatino Linotype', serif;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

/* Section Titles */
h2 {
    text-align: center;
    color: #800000;
    margin-left: 50%;
    margin-top: 20px;
    text-transform: uppercase;
    border-bottom: 2px solid #ffcccb;
    display: inline-block;
    padding-bottom: 5px;
    font-size: 1.8rem;
    font-family: 'Georgia', serif;
    transform: translateX(-50%);
}

/* Paragraph Styles */
#history p {
    max-width: 1000px;
    margin: 0 auto 20px auto;
    line-height: 1.8;
    text-align: justify;
    padding: 0 15px;
    color: #2c2c34; /* Dark gray text */
}

/* Products Section */
#products {
    padding: 30px 0;
    background-color: #ffe4e1; /* Light rose background */
}

/* Product Container */
.product-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    padding: 0 15px;
}

/* Product Item Styles */
.product-item {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 850px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    gap: 20px;
    transition: box-shadow 0.3s ease;
}

.product-item:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Image Styles */
.product-image img {
    width: 150px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    border: 2px solid #800000; /* Matches the theme */
}

/* Product Details Styles */
.product-details {
    flex: 1;
}

.product-details h5 {
    font-size: 1.6rem;
    color: #800000; /* Deep burgundy text */
    margin: 0 0 10px 0;
}

.quantity {
    margin: 10px 0;
}

.quantity label {
    font-size: 1rem;
    margin-right: 10px;
}

.quantity input {
    width: 50px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* Rate Styles */
.rate p {
    margin: 5px 0;
    font-size: 1rem;
    color: #555; /* Slightly lighter text */
}

/* Add to Cart Button */
.add-to-cart {
    background-color: #800000; /* Deep burgundy */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.add-to-cart:hover {
    background-color: #b22222; /* Firebrick red for hover */
    transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
    header h1 {
        font-size: 2.2rem;
    }

    h2 {
        font-size: 1.6rem;
    }

    .product-item {
        flex-direction: column;
        align-items: center;
    }

    .product-image img {
        width: 100px;
    }

    .add-to-cart {
        width: 100%;
    }
}

     </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">Aapna Theka</a>
            <ul class="nav-links">
                <li><a href="/homepage">Home</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#products">Products</a></li>
            </ul>
        </div>
    </nav>

    <!-- Header Section -->
    <header>
        <h1>Vodka</h1>
    </header>

    <!-- History Section -->
    <section id="history">
        <h2>History</h2>
        <p>
            Vodka, a globally cherished distilled spirit, has its roots in Eastern Europe, particularly in Russia and Poland, dating back to the 9th century. Initially produced for medicinal purposes, early vodka, or "gorzalka" in Poland, was also used in perfumery. Derived from the Slavic word "voda," meaning water, it became a staple in social and religious traditions by the 14th century. In the 16th century, Ivan the Terrible established a state monopoly on vodka production, formalizing its role in Russian society.
        </p>
        <p>
            During the Industrial Revolution, distillation techniques improved, introducing methods like charcoal filtration for greater purity. By the 19th century, vodka spread globally, especially to the Americas and Western Europe. Its neutral flavor made it ideal for cocktails such as the Moscow Mule and Bloody Mary, contributing to its rise in the 20th century. Today, vodka is celebrated worldwide for its versatility and remains a symbol of tradition and hospitality in its Eastern European origins, embodying centuries of cultural and technological refinement.
        </p>
    </section>

    <!-- Products Section -->
    <section id="products">
        <h2>Products</h2>
        <div class="product-container">
            <!-- Product 1 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="absolutevodka.jpg" alt="Absolute Vodka">
                </div>
                <div class="product-details">
                    <h5>Absolute Vodka</h5>
                    <div class="quantity">
                        <label for="quantity1">Quantity:</label>
                        <input type="number" id="quantity1" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="BELUGA.jpg" alt="Beluga">
                </div>
                <div class="product-details">
                    <h5>Beluga</h5>
                    <div class="quantity">
                        <label for="quantity1">Quantity:</label>
                        <input type="number" id="quantity1" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="belvedere.jpg" alt="Belvedere">
                </div>
                <div class="product-details">
                    <h5>Belvedere</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="belvedere-lake-bartezek.jpg" alt="Belvedere Lake Bartezek">
                </div>
                <div class="product-details">
                    <h5>Belvedere Lake Bartezek</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="CIROC.jpg" alt="Ciroc">
                </div>
                <div class="product-details">
                    <h5>Ciroc</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="GREYGOOSE.jpg" alt="Greygoose">
                </div>
                <div class="product-details">
                    <h5>Greygoose</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="KETELONE.jpg" alt="Ketelone">
                </div>
                <div class="product-details">
                    <h5>Ketelone</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="SKYYVODKA.jpg" alt="Skyyvodka">
                </div>
                <div class="product-details">
                    <h5>Skyyvodka</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="SMIRNOFF.jpg" alt="Smirnoff">
                </div>
                <div class="product-details">
                    <h5>Smirnoff</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="STOLICHNANYA.jpg" alt="Stolichnanya">
                </div>
                <div class="product-details">
                    <h5>Stolichnanya</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
`;


let wine = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wine</title>
    <!-- <link rel="stylesheet" href="wine.css"> -->
     <style>
        /* General Reset */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f9f5f0;
    color: #333;
}

/* Navigation Bar */
.navbar {
    background-color: #800000; /* Wine-inspired color */
    position: sticky;
    top: 0;
    color: #fff;
    padding: 1rem 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}

.nav-links li {
    display: inline;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #ffd700; /* Gold hover effect */
}

/* Header Section */
header {
    text-align: center;
    background: linear-gradient(to right, #8b0000, #800000);
    color: #fff;
    padding: 0px;
    margin-bottom: 0rem;
}

header h1 {
    font-size: 3rem;
    font-weight: bold;
}

/* History Section */
#history {
    padding: 2rem;
    background-color: #fff7e6;
    margin: 1rem auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#history h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #800000;
}

#history p {
    margin-bottom: 1rem;
    text-align: justify;
}

/* Products Section */
#products {
    padding: 2rem;
}

#products h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #800000;
    text-align: center;
}

.product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.product-item {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    text-align: center;
    padding: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.product-image img {
    max-width: 100%;
    border-bottom: 1px solid #ddd;
    margin-bottom: 1rem;
}

.product-details h5 {
    font-size: 1.25rem;
    color: #333;
    margin: 0.5rem 0;
}

.quantity {
    margin: 0.5rem 0;
}

.quantity label {
    margin-right: 0.5rem;
    font-size: 0.9rem;
    color: #555;
}

.quantity input {
    width: 50px;
    text-align: center;
    padding: 0.25rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.rate p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #555;
}

.add-to-cart {
    background-color: #800000;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-to-cart:hover {
    background-color: #a00000;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
        gap: 0.5rem;
    }

    .product-container {
        flex-direction: column;
        align-items: center;
    }
}

     </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">Aapna Theka</a>
            <ul class="nav-links">
                <li><a href="/homepage">Home</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#products">Products</a></li>
            </ul>
        </div>
    </nav>

    <!-- Header Section -->
    <header>
        <h1>Wine</h1>
    </header>

    <!-- History Section -->
    <section id="history">
        <h2>History</h2>
        <p>
            Wine, one of the oldest alcoholic beverages, traces its origins to around 6000 BCE in the regions of modern-day Georgia and Iran. Early winemaking involved fermenting wild grapes, and it soon became an integral part of religious rituals and social gatherings in ancient civilizations like Mesopotamia and Egypt. By 2000 BCE, the Phoenicians had begun trading wine across the Mediterranean, spreading viticulture to Greece and Italy.
        </p>
        <p>
            In ancient Greece, wine was celebrated in festivals dedicated to Dionysus, the god of wine, and valued for its medicinal properties. The Romans further advanced winemaking, developing techniques like barrel aging and viticultural practices that laid the foundation for modern wine production. As the Roman Empire expanded, vineyards flourished across Europe, particularly in France, Spain, and Germany.
        </p>
        <p>
            During the Middle Ages, the Catholic Church preserved and refined winemaking, as wine was essential for religious ceremonies. The Renaissance saw wine become a symbol of cultural sophistication, and global trade introduced European wines to the Americas and beyond. Today, wine is a global industry, deeply tied to culture, tradition, and innovation, embodying millennia of human craftsmanship.
        </p>
    </section>

    <!-- Products Section -->
    <section id="products">
        <h2>Products</h2>
        <div class="product-container">
            <!-- Product 1 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="twooceansshiraz.jpeg" alt="Two Oceans Shiraz">
                </div>
                <div class="product-details">
                    <h5>Two Oceans Shiraz</h5>
                    <div class="quantity">
                        <label for="quantity1">Quantity:</label>
                        <input type="number" id="quantity1" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="donnafugatasedarasicilia.jpeg" alt="Donnafugata Sedara Sicilia">
                </div>
                <div class="product-details">
                    <h5>Donnafugata Sedara Sicilia</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="renierirossodimontalcinodoc.jpeg" alt="Renieri Rosso di MontalcinoDOC">
                </div>
                <div class="product-details">
                    <h5>Renieri Rosso di MontalcinoDOC</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="pontingcloseofplaycabernetsauvignon.jpeg" alt="Ponting Close Of Play Cabernet Sauvignon">
                </div>
                <div class="product-details">
                    <h5>Ponting Close Of Play Cabernet Sauvignon</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="pontingthepinnacleshiraz.jpeg" alt="Ponting The Pinnacle Shiraz">
                </div>
                <div class="product-details">
                    <h5>Ponting The Pinnacle Shiraz</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="chapoutiermariusrouge.jpeg" alt="Chapoutier Marius Rouge">
                </div>
                <div class="product-details">
                    <h5>Chapoutier Marius Rouge</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="chateaulaubesbordeaux.jpeg" alt="Chateau Laubes Bordeaux">
                </div>
                <div class="product-details">
                    <h5>Chateau Laubes Bordeaux</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="izadicrianzatempranello.jpeg" alt="Izadi Crianza Tempranello">
                </div>
                <div class="product-details">
                    <h5>Izadi Crianza Tempranello</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
`;


let whiskey = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Whiskey</title>
    <!-- <link rel="stylesheet" href="whiskey.css"> -->
     <style>
        /* General Styles */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1a1a1a;
    color: #e0e0e0;
}

/* Navigation Bar */
.navbar {
    background-color: #333;
    color: #fff;
    padding: 15px 20px;
    position: sticky;
    top: 0;
    z-index: 10;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    font-size: 28px;
    font-weight: 700;
    text-decoration: none;
    color: #f39c12;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: #e0e0e0;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
}

.nav-links a:hover {
    background-color: #f39c12;
    color: #000;
}

/* Header Section */
header {
    background: linear-gradient(90deg, #f39c12, #e67e22);
    color: #fff;
    text-align: center;
    padding: 20px 20px;
}

header h1 {
    font-size: 60px;
    margin: 0;
    text-transform: uppercase;
}

/* History Section */
#history {
    background-color: #292929;
    padding: 40px 20px;
}

#history h2 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
    color: #f39c12;
}

#history p {
    max-width: 800px;
    margin: 10px auto;
    font-size: 18px;
    line-height: 1.8;
    color: #bdbdbd;
    text-align: justify;
}

/* Products Section */
#products {
    padding: 50px 20px;
    background-color: #1f1f1f;
    color: #ffffff;
}

#products h2 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 30px;
    color: #e74c3c;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Horizontal Scrollable Flex Container */
.product-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 20px;
    padding: 20px 0;
    scrollbar-width: thin;
    scrollbar-color: #e74c3c transparent;
}

.product-container::-webkit-scrollbar {
    height: 8px;
}

.product-container::-webkit-scrollbar-thumb {
    background: #e74c3c;
    border-radius: 5px;
}

.product-container::-webkit-scrollbar-track {
    background: transparent;
}

.product-item {
    min-width: 250px;
    background: #292929;
    border-radius: 12px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-item:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.product-image img {
    width: 100%;
    height: 300px;
    /* object-fit: cover; */
    display: block;
}

.product-details {
    padding: 15px;
}

.product-details h5 {
    font-size: 20px;
    margin: 10px 0;
    color: #e74c3c;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

.quantity {
    margin: 10px 0;
    font-size: 14px;
    color: #bbbbbb;
}

.quantity label {
    margin-right: 8px;
}

.quantity input {
    width: 60px;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #444;
    background-color: #1a1a1a;
    color: #f5f5f5;
    border-radius: 4px;
    text-align: center;
}

.rate p {
    font-size: 16px;
    color: #f1c40f;
    margin: 10px 0;
    font-weight: bold;
}

.add-to-cart {
    display: inline-block;
    background-color: #e74c3c;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    text-transform: uppercase;
}

.add-to-cart:hover {
    background-color: #c0392b;
    transform: scale(1.1);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .product-item {
        min-width: 200px;
    }

    .product-details h5 {
        font-size: 16px;
    }

    .add-to-cart {
        font-size: 12px;
        padding: 8px 12px;
    }
}

     </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">Aapna Theka</a>
            <ul class="nav-links">
                <li><a href="/homepage">Home</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="/tutorial">Tutorial</a></li>
            </ul>
        </div>
    </nav>

    <!-- Header Section -->
    <header>
        <h1>Whiskey</h1>
    </header>

    <!-- History Section -->
    <section id="history">
        <h2>History</h2>
        <p>
            Whiskey, a spirit with a storied past, dates back over a thousand years. Its origins can be traced to ancient Mesopotamia, where the first distillation practices began. Irish monks brought the technique to Ireland around the 6th century, creating "uisce beatha," meaning "water of life." The practice crossed into Scotland by the 11th century, resulting in Scotch whisky.
        </p>
        <p>
            By the 1600s, whiskey-making had spread across Europe and into the New World. American whiskey emerged, with bourbon becoming a distinct style by the late 18th century. Prohibition in the early 20th century severely impacted the industry, but it eventually rebounded.
        </p>
        <p>
            Today, whiskey is enjoyed globally, with various styles and brands reflecting its diverse history. From Irish and Scotch to American and Canadian, whiskey remains a beloved and storied spirit, cherished by many.
        </p>
    </section>

    <!-- Products Section -->
    <section id="products">
        <h2>Products</h2>
        <div class="product-container">
            <!-- Product 1 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="SIGANTURE.jpeg" alt="Siganture">
                </div>
                <div class="product-details">
                    <h5>Siganture</h5>
                    <div class="quantity">
                        <label for="quantity1">Quantity:</label>
                        <input type="number" id="quantity1" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="antiqity.jpeg" alt="Antiqity">
                </div>
                <div class="product-details">
                    <h5>Antiqity</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="blackandwhite.jpeg" alt="Black and White">
                </div>
                <div class="product-details">
                    <h5>Black and White</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="blackdog.jpeg" alt="Black Dog">
                </div>
                <div class="product-details">
                    <h5>Black Dog</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="bluelabel.jpeg" alt="Blue Label">
                </div>
                <div class="product-details">
                    <h5>Blue Label</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="GLENDFIDDITCH15.jpeg" alt="Glendfidditch 15">
                </div>
                <div class="product-details">
                    <h5>Glendfidditch 15</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="redlabel.jpeg" alt="Red Label">
                </div>
                <div class="product-details">
                    <h5>Red Label</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="royalstag.jpeg" alt="Royal Stag">
                </div>
                <div class="product-details">
                    <h5>Royal Stag</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="teachers.jpeg" alt="Teachers">
                </div>
                <div class="product-details">
                    <h5>Teachers</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="vat69.jpeg" alt="VAT 69">
                </div>
                <div class="product-details">
                    <h5>VAT 69</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
`;


let rum = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rum</title>
    <!-- <link rel="stylesheet" href="rum.css"> -->
     <style>
        /* General Styles */
body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
}

/* Navigation Bar */
.navbar {
    background-color: #2c3e50;
    padding: 15px 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    font-size: 24px;
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 2px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
}

.nav-links a:hover {
    color: #e74c3c;
}

/* Header Section */
header {
    background-color: #e74c3c;
    color: white;
    text-align: center;
    padding: 20px 20px;
}

header h1 {
    font-size: 48px;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* History Section */
#history {
    padding: 20px 20px;
    line-height: 1.8;
    background-color: #f9f9f9;
    color: #333;
}

#history h2 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    color: #e74c3c;
}

#history p {
    max-width: 800px;
    margin: 0 auto 20px auto;
    text-align: justify;
}

/* Products Section */
#products {
    padding: 40px 20px;
    background-color: #ecf0f1;
}

#products h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 30px;
    color: #2c3e50;
    text-transform: uppercase;
}

/* Product Container with Wrap Flex */
.product-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;
}

.product-item {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.product-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.product-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.product-details {
    margin-top: 20px;
    text-align: center;
}

.product-details h5 {
    font-size: 20px;
    color: #2c3e50;
    margin: 10px 0;
}

.quantity {
    margin: 10px 0;
}

.quantity label {
    margin-right: 8px;
    font-weight: 500;
    color: #555;
}

.quantity input {
    width: 60px;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
}

.rate p {
    margin: 10px 0;
    font-size: 18px;
    color: #e74c3c;
    font-weight: bold;
}

.add-to-cart {
    background-color: #e74c3c;
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;
}

.add-to-cart:hover {
    background-color: #c0392b;
    transform: scale(1.1);
}

/* Responsive Styles */
@media (max-width: 768px) {
    .product-container {
        flex-direction: column;
        align-items: center;
    }

    .product-item {
        width: 90%;
    }

    header h1 {
        font-size: 36px;
    }

    #history h2, #products h2 {
        font-size: 28px;
    }
}

     </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">Aapna Theka</a>
            <ul class="nav-links">
                <li><a href="/homepage">Home</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#products">Products</a></li>
            </ul>
        </div>
    </nav>

    <!-- Header Section -->
    <header>
        <h1>Rum</h1>
    </header>

    <!-- History Section -->
    <section id="history">
        <h2>History</h2>
        <p>Rum, one of the oldest distilled spirits, has a rich history that dates back to ancient times. It originated in the Caribbean during the 17th century when sugarcane plantations were established by European colonizers. The first rum distillation is believed to have taken place on the sugarcane plantations of Barbados.</p>
        <p>The spirit quickly gained popularity among sailors, pirates, and traders due to its long shelf life and the energizing effects it provided on long voyages. By the 18th century, rum became a valuable commodity in the triangular trade, being exchanged for slaves, molasses, and goods.</p>
        <p>Rum production spread to other regions, including Central and South America. The drink played a significant role in the history of the British Royal Navy, where sailors received daily rum rations known as "tot" until 1970.</p>
        <p>Today, rum is produced worldwide, with a variety of styles and flavors, from light rums used in cocktails to dark, aged rums enjoyed straight. Its cultural significance endures, celebrated in numerous festivals and traditions around the globe.</p>
    </section>

    <!-- Products Section -->
    <section id="products">
        <h2>Products</h2>
        <div class="product-container">
            <!-- Product 1 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="rumbullion.jpeg" alt="Rumbullion">
                </div>
                <div class="product-details">
                    <h5>Rumbullion</h5>
                    <div class="quantity">
                        <label for="quantity1">Quantity:</label>
                        <input type="number" id="quantity1" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="chairmansreservespiced.jpg" alt="Chairman's Reserve Spiced">
                </div>
                <div class="product-details">
                    <h5>Chairman's Reserve Spiced</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="ronzacapacentenariosistemasolera23.jpeg" alt="CRon Zacapa Centenario Sistema Solera 23">
                </div>
                <div class="product-details">
                    <h5>Ron Zacapa Centenario Sistema Solera 23</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="dunderhead.jpeg" alt="Dunderhead">
                </div>
                <div class="product-details">
                    <h5>Dunderhead</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="diplomaticoreservaexclusiva.jpg" alt="Diplomático Reserva Exclusiva">
                </div>
                <div class="product-details">
                    <h5>Diplomático Reserva Exclusiva</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="kakiragold.jpg" alt="Kakira Gold">
                </div>
                <div class="product-details">
                    <h5>Kakira Gold</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            
        </div>
    </section>
</body>
</html>
`;


let gin = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gin</title>
    <!-- <link rel="stylesheet" href="gin.css"> -->
     <style>
        /* General Reset */
body {
    margin: 0;
    font-family: 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    background-color: #f4f4f9;
    color: #444;
}

/* Navigation Bar */
.navbar {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.navbar-brand {
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
}

.nav-links li {
    display: inline;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #ffa500; /* Amber Hover */
}

/* Header Section */
header {
    text-align: center;
    background: linear-gradient(135deg, #00b4d8, #0077b6);
    color: white;
    padding: 0px 20px;
}

header h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
}

header p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
}

/* History Section */
#history {
    padding: 1rem 1.5rem;
    background-color: #fff;
    text-align: center;
    margin: 2rem 0;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

#history h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;
}

#history p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
    max-width: 800px;
    margin: 0 auto;
}

/* Products Section */
#products {
    padding: 2rem 1.5rem;
    background-color: #f4f4f9;
}

#products h2 {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
}

/* Product Container - Grid Layout */
.product-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    justify-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

/* Product Item */
.product-item {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
    width: 100%;
    max-width: 350px;
}

.product-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.product-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
}

.product-image img:hover {
    transform: scale(1.05);
}

.product-details h5 {
    font-size: 1.5rem;
    color: #333;
    margin: 1rem 0;
}

.quantity {
    margin: 1rem 0;
}

.quantity label {
    font-size: 1rem;
    color: #555;
    margin-right: 0.5rem;
}

.quantity input {
    width: 50px;
    text-align: center;
    padding: 0.25rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
}

.rate p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    color: #555;
}

.add-to-cart {
    background-color: #00b4d8;
    color: #fff;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1rem;
}

.add-to-cart:hover {
    background-color: #0077b6;
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar .container {
        flex-direction: column;
        align-items: flex-start;
    }

    .product-container {
        grid-template-columns: 1fr 1fr;
    }

    header h1 {
        font-size: 2.5rem;
    }

    #history h2 {
        font-size: 2rem;
    }

    #products h2 {
        font-size: 2rem;
    }
}

     </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">Aapna Theka</a>
            <ul class="nav-links">
                <li><a href="/homepage">Home</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#products">Products</a></li>
            </ul>
        </div>
    </nav>

    <!-- Header Section -->
    <header>
        <h1>Gin</h1>
    </header>

    <!-- History Section -->
    <section id="history">
        <h2>History</h2>
        <p>
            Gin, a spirit with a botanical twist, has a history rooted in medicinal use. Its origins trace back to the Middle Ages when monks and alchemists across Europe, particularly in Italy and Flanders, began infusing juniper berries into spirits. By the 16th century, Dutch physician Franciscus Sylvius is credited with the creation of "jenever," a juniper-based spirit used for medicinal purposes.
        </p>
        <p>
            Gin gained popularity in England during the late 17th century, particularly after William of Orange, a Dutchman, became King of England. The spirit became so widespread that the early 18th century saw the infamous "Gin Craze," a period of overconsumption that led to social problems and prompted government regulation.
        </p>
        <p>
            By the 19th century, gin had evolved with the introduction of new distillation techniques, giving rise to the London Dry Gin style. It became a staple in British culture, enjoyed in gin and tonics, which were originally used to ward off malaria.
        </p>
        <p>
            Today, gin enjoys a renaissance with the craft spirits movement, showcasing a variety of botanicals and flavors. From classic London Dry to contemporary craft gins, it remains a versatile and beloved spirit worldwide.
        </p>
    </section>

    <!-- Products Section -->
    <section id="products">
        <h2>Products</h2>
        <div class="product-container">
            <!-- Product 1 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="tanqueraynoten.jpg" alt="Tanqueray No. Ten">
                </div>
                <div class="product-details">
                    <h5>Tanqueray No. Ten</h5>
                    <div class="quantity">
                        <label for="quantity1">Quantity:</label>
                        <input type="number" id="quantity1" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="product-item">
                <div class="product-image">
                    <img src="bombaybramble.jpg" alt="Bombay Bramble">
                </div>
                <div class="product-details">
                    <h5>Bombay Bramble</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="berthasrevenge.jpg" alt="Bertha's Revenge">
                </div>
                <div class="product-details">
                    <h5>Bertha's Revenge</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="hendricksamazonia.jpg" alt="Hendrick's Amazonia">
                </div>
                <div class="product-details">
                    <h5>Hendrick's Amazonia</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="methodandmadness.jpg" alt="Method and Madness">
                </div>
                <div class="product-details">
                    <h5>Method and Madness</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="tanquerayno10citrusheartgrapefruitandrosemary.jpg" alt="Tanqueray No. 10 Citrus Heart Grapefruit & Rosemary">
                </div>
                <div class="product-details">
                    <h5>Tanqueray No. 10 Citrus Heart Grapefruit & Rosemary</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="thebotanistislaydry.jpg" alt="The Botanist Islay Dry">
                </div>
                <div class="product-details">
                    <h5>The Botanist Islay Dry</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
`;


let champagne = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Champagne | Aapna Theka</title>
    <!-- <link rel="stylesheet" href="champagne.css"> -->
     <style>
        /* Reset styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body and background */
body {
    font-family: 'Arial', sans-serif;
    background-color: #fafafa;
    color: #333;
    line-height: 1.6;
}

/* Navigation Bar */
.navbar {
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.navbar .navbar-brand {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
}

.navbar .nav-links {
    list-style: none;
    display: flex;
}

.navbar .nav-links li {
    margin: 0 1.5rem;
}

.navbar .nav-links li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.navbar .nav-links li a:hover {
    color: #ff9800;
}

/* Header Section */
header {
    text-align: center;
    background-color: #ff9800;
    color: white;
}

header h1 {
    font-size: 3.5rem;
    letter-spacing: 1px;
    font-weight: bold;
}

/* History Section */
#history {
    padding: 3rem 2rem;
    background-color: #fff;
    text-align: center;
}

#history h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

#history p {
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 1.5rem;
}

/* Products Section */
#products {
    padding: 4rem 2rem;
    background-color: #f4f4f4;
}

#products h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
}

/* 2-Column Layout for Products */
.product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
}

.product-item {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 48%; /* Two products per row */
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
}

.product-image {
    width: 40%; /* Image occupies 40% of the product card */
    height: 300px;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.product-image img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}

.product-details {
    padding: 1.5rem;
    width: 60%; /* Text and button section occupy 60% */
}

.product-details h5 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
}

.product-details p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
}

.product-details .quantity {
    margin-bottom: 1rem;
}

.product-details .quantity input {
    width: 50px;
    padding: 0.5rem;
    margin-left: 0.5rem;
}

.product-details .rate p {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.add-to-cart {
    background-color: #ff9800;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.add-to-cart:hover {
    background-color: #e68900;
}

/* Responsive Design */
@media (max-width: 768px) {
    .product-item {
        width: 48%;
    }
}

@media (max-width: 480px) {
    .product-item {
        width: 100%;
        margin-bottom: 2rem;
    }

    .product-details h5 {
        font-size: 1.3rem;
    }
}

     </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">Aapna Theka</a>
            <ul class="nav-links">
                <li><a href="/homepage">Home</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#products">Products</a></li>
            </ul>
        </div>
    </nav>

    <!-- Header Section -->
    <header>
        <h1>Champagne</h1>
    </header>

    <!-- History Section -->
    <section id="history">
        <h2>History</h2>
        <p>
            Champagne, the quintessential sparkling wine, boasts a regal history that begins in the Champagne region of France. The first documented sparkling wine produced in this area was during the early 16th century. By the late 17th century, the famous monk Dom Pérignon played a significant role in refining the méthode champenoise, a traditional method of producing sparkling wine.
        </p>
        <p>
            The drink gained popularity among European aristocracy, becoming synonymous with luxury and celebration. The 18th and 19th centuries saw the establishment of prestigious champagne houses, such as Moët & Chandon, Veuve Clicquot, and Pommery.
        </p>
        <p>
            Technological advances in glassmaking and the invention of the cork helped preserve champagne's effervescence, further boosting its global appeal. By the late 19th century, champagne was being exported worldwide, symbolizing elegance and festivity.
        </p>
        <p>
            Today, champagne remains a celebrated icon of luxury and special occasions. Strict production laws in the Champagne region ensure its quality and exclusivity, maintaining its status as a premier sparkling wine.
        </p>
    </section>

    <!-- Products Section -->
    <section id="products">
        <h2>Products</h2>
        <div class="product-container">
            <!-- Product 1 -->
            <article class="product-item">
                <div class="product-image">
                    <img src="billecartsalmon.jpeg" alt="Billecart Salmon">
                </div>
                <div class="product-details">
                    <h5>Billecart Salmon</h5>
                    <div class="quantity">
                        <label for="quantity1">Quantity:</label>
                        <input type="number" id="quantity1" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </article>

            <!-- Product 2 -->
            <article class="product-item">
                <div class="product-image">
                    <img src="jacquart.jpeg" alt="Jacquart">
                </div>
                <div class="product-details">
                    <h5>Jacquart</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </article>
            <article class="product-item">
                <div class="product-image">
                    <img src="laurentperrier.jpeg" alt="Laurent Perrier">
                </div>
                <div class="product-details">
                    <h5>Laurent Perrier</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </article>
            <article class="product-item">
                <div class="product-image">
                    <img src="jew.jpeg" alt="Jew">
                </div>
                <div class="product-details">
                    <h5>Jew</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </article>
            <article class="product-item">
                <div class="product-image">
                    <img src="moetandchandon.jpeg" alt="Moet and Chandon">
                </div>
                <div class="product-details">
                    <h5>Moet and Chandont</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </article>
            <article class="product-item">
                <div class="product-image">
                    <img src="Vietti.jpeg" alt="Vietti">
                </div>
                <div class="product-details">
                    <h5>Vietti</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </article>
            <article class="product-item">
                <div class="product-image">
                    <img src="villasandi.jpeg" alt="Villasandi">
                </div>
                <div class="product-details">
                    <h5>Villasandi</h5>
                    <div class="quantity">
                        <label for="quantity2">Quantity:</label>
                        <input type="number" id="quantity2" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
        </div>
    </section>
</body>
</html>
`;