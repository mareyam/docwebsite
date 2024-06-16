import {
  GridItem,
  useBreakpointValue,
  Code,
  Heading,
  Text,
  useColorModeValue,
  Box,
  VStack,
  IconButton,
  useClipboard,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MdDone, MdOutlineCopyAll } from "react-icons/md";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

import React from "react";
const Document_Verification = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <>
          <GridItem h="100%" pos="sticky" top="20" w={{ base: "", xl: "40vw" }}>
            <Details />
          </GridItem>
          <GridItem w={{ base: "", xl: "40vw" }}>{/* <Example /> */}</GridItem>
        </>
      ) : (
        <>
          <GridItem w="100%">
            <Details />
            {/* <Example /> */}
          </GridItem>
        </>
      )}
    </>
  );
};

export default Document_Verification;

const Details = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
  const [showTransition, setShowTransition] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const { onCopy, hasCopied } = useClipboard(currentCode);

  const handleCopy = (code) => {
    setCurrentCode(code);
    onCopy();
  };

  const code1 =
    "b2b-dev.idmetagroup.com/api/v1/verification/document_verification";
  const code2 =
    "POST b2b-dev.idmetagroup.com/api/v1/verification/document_verification";
  const accessCode1 = "accessToken";
  const accessCode2 = "accessToken";

  return (
    <VStack textAlign="left" bgColor={bgColor} p="4" rounded="lg">
      <Heading fontSize="24" w="full">
        Document Verification Services
      </Heading>
      <Text>
        This document provides a guide on how to use the API endpoints available
        for various verification services in Australia, such as visa, passport,
        citizenship, and more. The general setup and request structure are
        explained below, followed by specific endpoint instructions.
        <br />
        <br />
        <Text fontWeight="600" fontSize="16">
          Common Setup:
        </Text>
        All API requests should be made to the following base URL:
        <br />
        <Tooltip
          label={hasCopied || currentCode == code1 ? "copied" : "Click to copy"}
        >
          <Code
            // whiteSpace="nowrap"
            cursor="pointer"
            onClick={() => handleCopy(code1)}
          >{`${code1}`}</Code>
        </Tooltip>
        &nbsp;
        <br />
        <br />
        <Text fontWeight="600" fontSize="16">
          Authentication
        </Text>
        All requests require an Authorization header with a valid access token:
        <br />
        Authorization: &nbsp;
        <Tooltip
          label={
            hasCopied || currentCode == accessCode1 ? "copied" : "Click to copy"
          }
        >
          <Code
            // whiteSpace="nowrap"
            cursor="pointer"
            onClick={() => handleCopy(accessCode1)}
          >{`{{ ${accessCode1} }}`}</Code>
        </Tooltip>
        <br />
        <br /> Headers
        <br />
        The following headers must be included in all requests:
        <br />
        makefile
        <br /> accept: application/json
        <br /> Content-Type: application/json
        <br />
        Authorization: &nbsp;
        <Tooltip
          label={
            hasCopied || currentCode == accessCode2 ? "copied" : "Click to copy"
          }
        >
          <Code
            // whiteSpace="nowrap"
            cursor="pointer"
            onClick={() => handleCopy(accessCode2)}
          >{`{{ ${accessCode2} }}`}</Code>
        </Tooltip>
        <br />
        <br />
        <Text fontWeight="600" fontSize="16">
          Endpoint
        </Text>
        <Tooltip
          label={hasCopied || currentCode == code2 ? "copied" : "Click to copy"}
        >
          <Code
            // whiteSpace="nowrap"
            cursor="pointer"
            onClick={() => handleCopy(code2)}
          >{`${code2}`}</Code>
        </Tooltip>
        <br />
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*returnFullDocumentImage* <Code>(boolean)</Code>
          </Text>
          : Indicates whether to return the full document image.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*returnFaceImage* <Code>(boolean)</Code>
          </Text>
          : Indicates whether to return the face image from the document.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*returnSignatureImage* <Code>(boolean)</Code>
          </Text>
          : Indicates whether to return the signature image from the document.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*allowBlurFilter* <Code>(boolean)</Code>
          </Text>
          : Allows the use of a blur filter during image processing. Indicates
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*allowUnparsedMrzResults* <Code>(boolean)</Code>
          </Text>
          : Allows returning results even if MRZ (Machine Readable Zone) parsing
          fails.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*allowUnverifiedMrzResults* <Code>(boolean)</Code>
          </Text>
          : Allows returning MRZ results without verification.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*validateResultCharacters* <Code>(boolean)</Code>
          </Text>
          : Validates characters in the parsed results.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*anonymizationMode* <Code>(string)</Code>
          </Text>
          : Specifies the mode for anonymization. Set to
          <Code>&quot;FULL_RESULT&quot;</Code>for full result anonymization.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*anonymizeImage* <Code>(boolean)</Code>
          </Text>
          :Indicates whether to anonymize the image. Specifies the mode for
          anonymization.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*ageLimit* <Code>(integer)</Code>
          </Text>
          :Sets the age limit for document verification.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*imageSource* <Code>(string)</Code>
          </Text>
          :The source of the image being processed.
        </Text>
        <br />
        <Text>
          <Text as="span" fontWeight={600}>
            -*scanCroppedDocumentImage* <Code>(string)</Code>
          </Text>
          :Indicates whether to scan the cropped document image.
        </Text>
        <br />
      </Text>
    </VStack>
  );
};

// const Example = () => {
//   const jsonCode = ` {
//   "returnFullDocumentImage": false,
//   "returnFaceImage": false,
//   "returnSignatureImage": false,
//   "allowBlurFilter": false,
//   "allowUnparsedMrzResults": false,
//   "allowUnverifiedMrzResults": true,
//   "validateResultCharacters": true,
//   "anonymizationMode": "FULL_RESULT",
//   "anonymizeImage": true,
//   "ageLimit": 0,
//   "imageSource": "string",
//   "scanCroppedDocumentImage": false
//   }`;

//   const response = `{
// - *200 OK*: The request was successful, and the response contains the document verification results.
// - *400 Bad Request*: The request was invalid.
// - *403 Forbidden*: Access to the resource is forbidden.
// - *500 Internal Server Error*: The server encountered an error processing the request.
// - *503 Service Unavailable*: The service is temporarily unavailable.
// - *504 Gateway Time-out*: The gateway timed out while processing the request.
// Using curl:

// sh
// curl -X POST b2b-dev.idmetagroup.com/api/v1/verification/document_verification \ -H 'Content-Type: application/json'-H \n'Accept: application/json' -d  \n{
//     "returnFullDocumentImage": false,
//     "returnFaceImage": false,
//     "returnSignatureImage": false,
//     "allowBlurFilter": false,
//     "allowUnparsedMrzResults": false,
//     "allowUnverifiedMrzResults": true,
//     "validateResultCharacters": true,
//     "anonymizationMode": "FULL_RESULT",
//     "anonymizeImage": true,
//     "ageLimit": 0,
//     "imageSource": "string",
//     "scanCroppedDocumentImage": false
//   }

// //Sample Response

// {
//   "executionId": "string",
//   "finishTime": "string",
//   "startTime": "string",
//   "result": {
//     "dateOfBirth": {
//       "day": 0,
//       "month": 0,
//       "year": 0,
//       "successfullyParsed": true,
//       "originalString": "string"
// },
//     "classInfo": {
//       "country": "COUNTRY_NONE",
//       "region": "REGION_NONE",
//       "type": "TYPE_NONE",
//       "countryName": "string",
//       "isoAlpha3CountryCode": "string",
//       "isoAlpha2CountryCode": "string",
//       "isoNumericCountryCode": "string"
//     },
//     "type": "string",
//     "isBelowAgeLimit": true,
//     "age": 0,
//     "recognitionStatus": "EMPTY",
//     "firstName": "string",
//     "lastName": "string",
//     "fullName": "string",
//     "address": "string",
//     "dateOfIssue": {
//       "day": 0,
//       "month": 0,
//       "year": 0,
//       "successfullyParsed": true,
//       "originalString": "string"
//     },
//     "dateOfExpiry": {
//       "day": 0,
//       "month": 0,
//       "year": 0,
//       "successfullyParsed": true,
//       "originalString": "string"
//     },
//     "documentNumber": "string",
//     "sex": "string",
//     "driverLicenseDetailedInfo": {
//       "restrictions": "string",
//       "endorsements": "string",
//       "vehicleClass": "string",
//       "conditions": "string",
//       "vehicleClassesInfo": [
//         {
//           "vehicleClass": "string",
//           "licenceType": "string",
//           "effectiveDate": {
//             "day": 0,
//             "month": 0,
//             "year": 0,
//             "successfullyParsed": true,
//             "originalString": "string"
//           },
//           "expiryDate": {
//             "day": 0,
//             "month": 0,
//             "year": 0,
//             "successfullyParsed": true,
//             "originalString": "string"
//           }
//         }
//       ]
//     },
//     "fullDocumentImageBase64": "string",
//     "faceImageBase64": "string",
//     "additionalNameInformation": "string",
//     "additionalAddressInformation": "string",
//     "additionalOptionalAddressInformation": "string",
//     "placeOfBirth": "string",
//     "nationality": "string",
//     "race": "string",
//     "religion": "string",
//     "profession": "string",
//     "maritalStatus": "string",
//     "residentialStatus": "string",
//     "employer": "string",
//     "personalIdNumber": "string",
//     "documentAdditionalNumber": "string",
//     "documentOptionalAdditionalNumber": "string",
//     "issuingAuthority": "string",
//     "mrzData": {
//       "rawMrzString": "string",
//       "documentCode": "string",
//       "issuer": "string",
//       "documentNumber": "string",
//       "opt1": "string",
//       "opt2": "string",
//       "gender": "string",
//       "nationality": "string",
//       "primaryId": "string",
//       "secondaryId": "string",
//       "alienNumber": "string",
//       "applicationReceiptNumber": "string",
//       "immigrantCaseNumber": "string",
//       "mrzVerified": true,
//       "mrzParsed": true,
//       "dateOfBirth": {
//         "day": 0,
//         "month": 0,
//         "year": 0,
//         "successfullyParsed": true,
//         "originalString": "string"
//       },
//       "dateOfExpiry": {
//         "day": 0,
//         "month": 0,
//         "year": 0,
//         "successfullyParsed": true,
//         "originalString": "string"
//       },
//       "documentType": "UNKNOWN",
//       "issuerName": "string",
//       "nationalityName": "string"
//     },
//     "conditions": "string",
//     "localizedName": "string",
//     "dateOfExpiryPermanent": true,
//     "additionalPersonalIdNumber": "string",
//     "viz": {
//       "firstName": "string",
//       "lastName": "string",
//       "fullName": "string",
//       "additionalNameInformation": "string",
//       "localizedName": "string",
//       "address": "string",
//       "additionalAddressInformation": "string",
//       "additionalOptionalAddressInformation": "string",
//       "placeOfBirth": "string",
//       "nationality": "string",
//       "race": "string",
//       "religion": "string",
//       "profession": "string",
//       "maritalStatus": "string",
//       "residentialStatus": "string",
//       "employer": "string",
//       "sex": "string",
//       "dateOfBirth": {
//         "day": 0,
//         "month": 0,
//         "year": 0,
//         "successfullyParsed": true,
//         "originalString": "string"
//       },
//       "dateOfIssue": {
//         "day": 0,
//         "month": 0,
//         "year": 0,
//         "successfullyParsed": true,
//         "originalString": "string"
//       },
//       "dateOfExpiry": {
//         "day": 0,
//         "month": 0,
//         "year": 0,
//         "successfullyParsed": true,
//         "originalString": "string"
//       },
//       "dateOfExpiryPermanent": true,
//       "documentNumber": "string",
//       "personalIdNumber": "string",
//       "documentAdditionalNumber": "string",
//       "additionalPersonalIdNumber": "string",
//       "documentOptionalAdditionalNumber": "string",
//       "issuingAuthority": "string",
//       "driverLicenseDetailedInfo": {
//         "restrictions": "string",
//         "endorsements": "string",
//         "vehicleClass": "string",
//         "conditions": "string",
//         "vehicleClassesInfo": [
//           {
//             "vehicleClass": "string",
//             "licenceType": "string",
//             "effectiveDate": {
//               "day": 0,
//               "month": 0,
//               "year": 0,
//               "successfullyParsed": true,
//               "originalString": "string"
//             },
//             "expiryDate": {
//               "day": 0,
//               "month": 0,
//               "year": 0,
//               "successfullyParsed": true,
//               "originalString": "string"
//             }
//           }
//         ]
//       },
//       "conditions": "string",
//       "fathersName": "string",
//       "mothersName": "string"
//     },
//     "barcode": {
//       "rawDataBase64": "string",
//       "stringData": "string",
//       "firstName": "string",
//       "lastName": "string",
//       "middleName": "string",
//       "fullName": "string",
//       "additionalNameInformation": "string",
//       "address": "string",
//       "placeOfBirth": "string",
//       "nationality": "string",
//       "race": "string",
//       "religion": "string",
//       "profession": "string",
//       "maritalStatus": "string",
//       "residentialStatus": "string",
//       "employer": "string",
//       "sex": "string",
//       "dateOfBirth": {
//         "day": 0,
//         "month": 0,
//         "year": 0,
//         "successfullyParsed": true,
//         "originalString": "string"
//       },
//       "dateOfIssue": {
//         "day": 0,
//         "month": 0,
//         "year": 0,
//         "successfullyParsed": true,
//         "originalString": "string"
//       },
//       "dateOfExpiry": {
//         "day": 0,
//         "month": 0,
//         "year": 0,
//         "successfullyParsed": true,
//         "originalString": "string"
//       },
//       "documentNumber": "string",
//       "personalIdNumber": "string",
//       "documentAdditionalNumber": "string",
//       "issuingAuthority": "string",
//       "addressDetailedInfo": {
//         "street": "string",
//         "postalCode": "string",
//         "city": "string",
//         "jurisdiction": "string"
//       },
//       "driverLicenseDetailedInfo": {
//         "restrictions": "string",
//         "endorsements": "string",
//         "vehicleClass": "string",
//         "conditions": "string",
//         "vehicleClassesInfo": [
//           {
//             "vehicleClass": "string",
//             "licenceType": "string",
//             "effectiveDate": {
//               "day": 0,
//               "month": 0,
//               "year": 0,
//               "successfullyParsed": true,
//               "originalString": "string"
//             },
//             "expiryDate": {
//               "day": 0,
//               "month": 0,
//               "year": 0,
//               "successfullyParsed": true,
//               "originalString": "string"
//             }
//           }
//         ]
//       },
//       "extendedElements": [
//         {
//           "key": "BARCODE_ELEMENT_KEY_DOCUMENT_TYPE",
//           "value": "string"
//         }
//       ]
//     },
//     "imageAnalysisResult": {
//       "blurred": true,
//       "documentImageColorStatus": "NOT_AVAILABLE",
//       "documentImageMoireStatus": "NOT_AVAILABLE",
//       "faceDetectionStatus": "NOT_AVAILABLE",
//       "mrzDetectionStatus": "NOT_AVAILABLE",
//       "barcodeDetectionStatus": "NOT_AVAILABLE"
//     },
//     "processingStatus": "SUCCESS",
//     "recognitionMode": "NONE",
//     "signatureImageBase64": "string",
//     "fathersName": "string",
//     "mothersName": "string"
//   }
//  }
// }`;
//   const [showTransition, setShowTransition] = useState(false);
//   const bgColor = useColorModeValue("gray.50", "whiteAlpha.200");
//   const { colorMode } = useColorMode();
//   const [currentCode, setCurrentCode] = useState("");
//   const { onCopy, hasCopied } = useClipboard(currentCode);

//   useEffect(() => {
//     setShowTransition(hasCopied);
//   }, [hasCopied]);

//   const handleCopy = (code) => {
//     setCurrentCode(code);
//     onCopy();
//   };

//   return (
//     <VStack pos="relative" bgColor={bgColor} borderRadius="lg">
//       <Box w="full">
//         <Code mx="4" mt="6">
//           Request:
//         </Code>
//         <SyntaxHighlighter
//           customStyle={{
//             height: "100%",
//             width: "100%",
//             backgroundColor:
//               colorMode == "dark" ? "transparent" : "transparent",
//           }}
//           language="json"
//           style={okaidia}
//           wrapLongLines
//         >
//           {jsonCode}
//         </SyntaxHighlighter>
//         <Box pos="absolute" top="4" right={{ base: "-4", xl: "2", "2xl": "8" }}>
//           <IconButton
//             onClick={() => handleCopy(jsonCode)}
//             aria-label={
//               hasCopied && currentCode == jsonCode ? "Copied" : "Copy"
//             }
//             icon={
//               hasCopied && currentCode == jsonCode ? (
//                 <MdDone />
//               ) : (
//                 <MdOutlineCopyAll />
//               )
//             }
//             bgColor="transparent"
//             transition={showTransition ? "all 0.5s ease" : "none"}
//           />
//         </Box>
//       </Box>

//       <Box w="full" pos="relative">
//         <Code mx="4">Responses:</Code>
//         <SyntaxHighlighter
//           customStyle={{
//             height: "100%",
//             width: "100%",
//             backgroundColor:
//               colorMode == "dark" ? "transparent" : "transparent",
//           }}
//           language="json"
//           style={okaidia}
//           wrapLongLines
//         >
//           {response}
//         </SyntaxHighlighter>
//         <Box pos="absolute" top="4" right={{ base: "-4", xl: "2", "2xl": "2" }}>
//           <IconButton
//             onClick={() => handleCopy(response)}
//             aria-label={
//               hasCopied && currentCode == response ? "Copied" : "Copy"
//             }
//             icon={
//               hasCopied && currentCode == response ? (
//                 <MdDone />
//               ) : (
//                 <MdOutlineCopyAll />
//               )
//             }
//             bgColor="transparent"
//             transition={showTransition ? "all 0.5s ease" : "none"}
//           />
//         </Box>
//       </Box>
//     </VStack>
//   );
// };
