//dependencies

const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')
const PORT = 8000
const fs = require('fs')


const app = express()

const url = 'https://www.theguardian.com/uk'

axios(url)
    .then(response => {
        const html = response.data
        //console.log(html)
        const $ = cheerio.load(html)
        const links = []

        $('.fc-item__title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            
            links.push({
                title,
                url
            })
        })
        console.log(links)
    
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server is up on PORT ${PORT}`) )