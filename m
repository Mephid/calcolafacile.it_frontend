[33mcommit 311e5e2802650cce5598166ee8555043eb18dfd8[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: G. Cappai <cappaigianluca@gmail.com>
Date:   Sat Jan 15 12:27:03 2022 +0100

    Cleanup imports

[1mdiff --git a/components/calculators/CalcoloBollo/CalcForm.tsx b/components/calculators/CalcoloBollo/CalcForm.tsx[m
[1mindex dd7e4d3..24d559e 100644[m
[1m--- a/components/calculators/CalcoloBollo/CalcForm.tsx[m
[1m+++ b/components/calculators/CalcoloBollo/CalcForm.tsx[m
[36m@@ -1,4 +1,5 @@[m
[31m-import { Button, Form } from 'react-bootstrap'[m
[32m+[m[32mimport Button from 'react-bootstrap/Button'[m
[32m+[m[32mimport Form from 'react-bootstrap/Form'[m
 [m
 import LoadingSpinner from '../../shared/LoadingSpinner'[m
 [m
[1mdiff --git a/components/calculators/CalcoloBollo/EuroClass.tsx b/components/calculators/CalcoloBollo/EuroClass.tsx[m
[1mindex 00b26a8..1f89fcc 100644[m
[1m--- a/components/calculators/CalcoloBollo/EuroClass.tsx[m
[1m+++ b/components/calculators/CalcoloBollo/EuroClass.tsx[m
[36m@@ -1,6 +1,6 @@[m
 import React, { FormEventHandler } from 'react'[m
 [m
[31m-import { Form } from 'react-bootstrap'[m
[32m+[m[32mimport Form from 'react-bootstrap/Form'[m
 [m
 import { EuroCategory } from './EuroClassEnum'[m
 [m
[1mdiff --git a/components/calculators/CalcoloBollo/Power.tsx b/components/calculators/CalcoloBollo/Power.tsx[m
[1mindex ba1b8f9..4236f43 100644[m
[1m--- a/components/calculators/CalcoloBollo/Power.tsx[m
[1m+++ b/components/calculators/CalcoloBollo/Power.tsx[m
[36m@@ -1,12 +1,10 @@[m
[31m-import React, { FormEventHandler } from 'react'[m
[32m+[m[32mimport React from 'react'[m
 [m
[31m-import {[m
[31m-    Form,[m
[31m-    InputGroup,[m
[31m-    FormControl,[m
[31m-    DropdownButton,[m
[31m-    Dropdown,[m
[31m-} from 'react-bootstrap'[m
[32m+[m[32mimport Form from 'react-bootstrap/Form'[m
[32m+[m[32mimport InputGroup from 'react-bootstrap/InputGroup'[m
[32m+[m[32mimport FormControl from 'react-bootstrap/FormControl'[m
[32m+[m[32mimport DropdownButton from 'react-bootstrap/DropdownButton'[m
[32m+[m[32mimport Dropdown from 'react-bootstrap/Dropdown'[m
 [m
 interface IPowerProps {[m
     handler: any[m
[1mdiff --git a/components/calculators/CalcoloBollo/Region.tsx b/components/calculators/CalcoloBollo/Region.tsx[m
[1mindex c39b343..cd680cd 100644[m
[1m--- a/components/calculators/CalcoloBollo/Region.tsx[m
[1m+++ b/components/calculators/CalcoloBollo/Region.tsx[m
[36m@@ -1,5 +1,5 @@[m
[31m-import React, { FormEventHandler } from 'react'[m
[31m-import { Form } from 'react-bootstrap'[m
[32m+[m[32mimport React from 'react'[m
[32m+[m[32mimport Form from 'react-bootstrap/Form'[m
 [m
 import { Regions } from './RegionEnum'[m
 [m
[1mdiff --git a/components/calculators/CalcoloBollo/index.tsx b/components/calculators/CalcoloBollo/index.tsx[m
[1mindex 3e23887..36bb38e 100644[m
[1m--- a/components/calculators/CalcoloBollo/index.tsx[m
[1m+++ b/components/calculators/CalcoloBollo/index.tsx[m
[36m@@ -1,6 +1,6 @@[m
 import React from 'react'[m
 [m
[31m-import { Card } from 'react-bootstrap'[m
[32m+[m[32mimport Card from 'react-bootstrap/Card'[m
 [m
 import config from '../../../website.config'[m
 [m
[1mdiff --git a/components/calculators/CalcoloPercentuale/makeCalc.tsx b/components/calculators/CalcoloPercentuale/makeCalc.tsx[m
[1mindex 8d1439e..7306298 100644[m
[1m--- a/components/calculators/CalcoloPercentuale/makeCalc.tsx[m
[1m+++ b/components/calculators/CalcoloPercentuale/makeCalc.tsx[m
[36m@@ -1,7 +1,8 @@[m
 import config from '../../../website.config'[m
 [m
 import { useState } from 'react'[m
[31m-import { Card, Button } from 'react-bootstrap'[m
[32m+[m[32mimport Card from 'react-bootstrap/Card'[m
[32m+[m[32mimport Button from 'react-bootstrap/Button'[m
 [m
 import { IWrappedComponent } from './IWrappedComponent'[m
 import CalculatorType from './CalculatorType'[m
[1mdiff --git a/components/calculators/ConvertitoreCvKw/CalcFormCvKw.tsx b/components/calculators/ConvertitoreCvKw/CalcFormCvKw.tsx[m
[1mindex 735554a..7609fe3 100644[m
[1m--- a/components/calculators/ConvertitoreCvKw/CalcFormCvKw.tsx[m
[1m+++ b/components/calculators/ConvertitoreCvKw/CalcFormCvKw.tsx[m
[36m@@ -1,4 +1,5 @@[m
[31m-import { Button, Form } from 'react-bootstrap'[m
[32m+[m[32mimport Button from 'react-bootstrap/Button'[m
[32m+[m[32mimport Form from 'react-bootstrap/Form'[m
 [m
 import { Formik } from 'formik'[m
 import * as yup from 'yup'[m
[1mdiff --git a/components/calculators/ConvertitoreCvKw/PowerCvKw.tsx b/components/calculators/ConvertitoreCvKw/PowerCvKw.tsx[m
[1mindex 78f31e2..af2c407 100644[m
[1m--- a/components/calculators/ConvertitoreCvKw/PowerCvKw.tsx[m
[1m+++ b/components/calculators/ConvertitoreCvKw/PowerCvKw.tsx[m
[36m@@ -1,12 +1,10 @@[m
 import React, { FormEventHandler } from 'react'[m
 [m
[31m-import {[m
[31m-    Form,[m
[31m-    InputGroup,[m
[31m-    FormControl,[m
[31m-    DropdownButton,[m
[31m-    Dropdown,[m
[31m-} from 'react-bootstrap'[m
[32m+[m[32mimport Form from 'react-bootstrap/Form'[m
[32m+[m[32mimport InputGroup from 'react-bootstrap/InputGroup'[m
[32m+[m[32mimport FormControl from 'react-bootstrap/FormControl'[m
[32m+[m[32mimport DropdownButton from 'react-bootstrap/DropdownButton'[m
[32m+[m[32mimport Dropdown from 'react-bootstrap/Dropdown'[m
 [m
 interface IPowerProps {[m
     handler: any[m
[1mdiff --git a/components/calculators/ConvertitoreCvKw/index.tsx b/components/calculators/ConvertitoreCvKw/index.tsx[m
[1mindex f1e9dee..c071ae1 100644[m
[1m--- a/components/calculators/ConvertitoreCvKw/index.tsx[m
[1m+++ b/components/calculators/ConvertitoreCvKw/index.tsx[m
[36m@@ -1,7 +1,9 @@[m
 import { useState } from 'react'[m
[31m-import { Card } from 'react-bootstrap'[m
 import useFetch from '../../../hooks/useFetch'[m
 import config from '../../../website.config'[m
[32m+[m
[32m+[m[32mimport Card from 'react-bootstrap/Card'[m
[32m+[m
 import CalcFormCvKw from './CalcFormCvKw'[m
 [m
 const apiUrl = config.CALCULATION_SERVER_API_URL + '/cv-kw-converter'[m
[1mdiff --git a/components/home/ContactForm.tsx b/components/home/ContactForm.tsx[m
[1mindex 88e8488..1263a9b 100644[m
[1m--- a/components/home/ContactForm.tsx[m
[1m+++ b/components/home/ContactForm.tsx[m
[36m@@ -1,4 +1,8 @@[m
[31m-import { Col, Row, Button, Form, Spinner, Alert } from 'react-bootstrap'[m
[32m+[m[32mimport Col from 'react-bootstrap/Col'[m
[32m+[m[32mimport Row from 'react-bootstrap/Row'[m
[32m+[m[32mimport Button from 'react-bootstrap/Button'[m
[32m+[m[32mimport Form from 'react-bootstrap/Form'[m
[32m+[m[32mimport Spinner from 'react-bootstrap/Spinner'[m
 [m
 import { Formik } from 'formik'[m
 import * as yup from 'yup'[m
[1mdiff --git a/components/home/Contacts.tsx b/components/home/Contacts.tsx[m
[1mindex 938fa70..bbd83ff 100644[m
[1m--- a/components/home/Contacts.tsx[m
[1m+++ b/components/home/Contacts.tsx[m
[36m@@ -1,4 +1,6 @@[m
[31m-import { Col, Row, Container } from 'react-bootstrap'[m
[32m+[m[32mimport Col from 'react-bootstrap/Col'[m
[32m+[m[32mimport Row from 'react-bootstrap/Row'[m
[32m+[m[32mimport Container from 'react-bootstrap/Container'[m
 [m
 import PopupAlert from '../shared/PopupAlert'[m
 [m
[1mdiff --git a/components/home/Hero.tsx b/components/home/Hero.tsx[m
[1mindex e1faf85..9f9a088 100644[m
[1m--- a/components/home/Hero.tsx[m
[1m+++ b/components/home/Hero.tsx[m
[36m@@ -1,7 +1,11 @@[m
[31m-import { Col, Row, Button, Container } from 'react-bootstrap'[m
 import Image from 'next/image'[m
 import Link from 'next/link'[m
 [m
[32m+[m[32mimport Col from 'react-bootstrap/Col'[m
[32m+[m[32mimport Row from 'react-bootstrap/Row'[m
[32m+[m[32mimport Button from 'react-bootstrap/Button'[m
[32m+[m[32mimport Container from 'react-bootstrap/Container'[m
[32m+[m
 const Header = () => {[m
     return ([m
         <section className="bg-secondary padding-navbar">[m
[1mdiff --git a/components/home/Showcase.tsx b/components/home/Showcase.tsx[m
[1mindex b340d34..03ce276 100644[m
[1m--- a/components/home/Showcase.tsx[m
[1m+++ b/components/home/Showcase.tsx[m
[36m@@ -1,4 +1,7 @@[m
[31m-import { Col, Row, Button, Container } from 'react-bootstrap'[m
[32m+[m[32mimport Col from 'react-bootstrap/Col'[m
[32m+[m[32mimport Row from 'react-bootstrap/Row'[m
[32m+[m[32mimport Button from 'react-bootstrap/Button'[m
[32m+[m[32mimport Container from 'react-bootstrap/Container'[m
 [m
 import ShowcaseCard from './ShowcaseCard'[m
 import React, { useState, useMemo, useEffect } from 'react'[m
[1mdiff --git a/components/home/ShowcaseCard.tsx b/components/home/ShowcaseCard.tsx[m
[1mindex 621371b..f55058e 100644[m
[1m--- a/components/home/ShowcaseCard.tsx[m
[1m+++ b/components/home/ShowcaseCard.tsx[m
[36m@@ -1,4 +1,5 @@[m
[31m-import { Card, Button } from 'react-bootstrap'[m
[32m+[m[32mimport Card from 'react-bootstrap/Card'[m
[32m+[m[32mimport Button from 'react-bootstrap/Button'[m
 [m
 import Link from 'next/link'[m
 [m
[1mdiff --git a/components/layout/Footer.tsx b/components/layout/Footer.tsx[m
[1mindex 3534942..6cf73e0 100644[m
[1m--- a/components/layout/Footer.tsx[m
[1m+++ b/components/layout/Footer.tsx[m
[36m@@ -1,6 +1,9 @@[m
 import Link from 'next/link'[m
 [m
[31m-import { Container, Nav, Row, Col } from 'react-bootstrap'[m
[32m+[m[32mimport Container from 'react-bootstrap/Container'[m
[32m+[m[32mimport Row from 'react-bootstrap/Row'[m
[32m+[m[32mimport Col from 'react-bootstrap/Col'[m
[32m+[m[32mimport Nav from 'react-bootstrap/Nav'[m
 [m
 const Footer = () => {[m
     return ([m
[1mdiff --git a/components/layout/index.tsx b/components/layout/index.tsx[m
[1mindex 60c2a7a..33bf5c1 100644[m
[1m--- a/components/layout/index.tsx[m
[1m+++ b/components/layout/index.tsx[m
[36m@@ -1,5 +1,3 @@[m
[31m-import { Container } from 'react-bootstrap'[m
[31m-[m
 import Footer from './Footer'[m
 import Navbar from './Navbar'[m
 [m
[1mdiff --git a/components/shared/LoadingSpinner.tsx b/components/shared/LoadingSpinner.tsx[m
[1mindex 6821279..31d388e 100644[m
[1m--- a/components/shared/LoadingSpinner.tsx[m
[1m+++ b/components/shared/LoadingSpinner.tsx[m
[36m@@ -1,4 +1,4 @@[m
[31m-import { Spinner } from 'react-bootstrap'[m
[32m+[m[32mimport Spinner from 'react-bootstrap/Spinner'[m
 [m
 const LoadingSpinner = () => {[m
     return ([m
[1mdiff --git a/components/shared/PopupAlert.tsx b/components/shared/PopupAlert.tsx[m
[1mindex 35d3c0a..db29ed8 100644[m
[1m--- a/components/shared/PopupAlert.tsx[m
[1m+++ b/components/shared/PopupAlert.tsx[m
[36m@@ -1,5 +1,5 @@[m
 import { useState, useEffect } from 'react'[m
[31m-import { Alert, Collapse, Fade } from 'react-bootstrap'[m
[32m+[m[32mimport Alert from 'react-bootstrap/Alert'[m
 [m
 interface IToastAlertProps {[m
     variant: string[m
[1mdiff --git a/components/shared/SimplePageContainer.tsx b/components/shared/SimplePageContainer.tsx[m
[1mindex 55a51ec..5ec1856 100644[m
[1m--- a/components/shared/SimplePageContainer.tsx[m
[1m+++ b/components/shared/SimplePageContainer.tsx[m
[36m@@ -1,4 +1,6 @@[m
[31m-import { Container, Row, Col } from 'react-bootstrap'[m
[32m+[m[32mimport Container from 'react-bootstrap/Container'[m
[32m+[m[32mimport Row from 'react-bootstrap/Row'[m
[32m+[m[32mimport Col from 'react-bootstrap/Col'[m
 [m
 import Head from './Head'[m
 [m
