import PDFServicesSdk from '@adobe/pdfservices-node-sdk';

const client_id = "72d89773a0a74a7ebb339dcb53d33aec";
const client_secret = "p8e-fCxYui-on0ioVP05xcDdmgEeicwvP5V0";

async function convertPdf(fileName) {
    try {
        const credentials = PDFServicesSdk.Credentials
            .servicePrincipalCredentialsBuilder()
            .withClientId(client_id)
            .withClientSecret(client_secret)
            .build();

        const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
            exportPDFToImages = PDFServicesSdk.ExportPDFToImages,
            exportPDFToImagesOperation = exportPDFToImages.Operation.createNew(exportPDFToImages.SupportedTargetFormats.JPEG);

        const input = PDFServicesSdk.FileRef.createFromLocalFile(fileName);
        exportPDFToImagesOperation.setInput(input);

        const timeStamp = createTimeStamp();

        const result = await exportPDFToImagesOperation.execute(executionContext);

        // Since we are only interested in the first page
        if (result.length > 0) {
            const firstPage = result[0];
            const outputFilename = `uploads/pdf/export_${timeStamp}_0.jpeg`;
            await firstPage.saveAsFile(outputFilename);
            return outputFilename; // Return the filename of the first page
        } else {
            throw new Error('No pages were converted');
        }
    } catch (err) {
        console.log('Exception encountered while executing operation', err);
        throw err; // Rethrow the error for the caller to handle
    }
}

function createTimeStamp() {
    let date = new Date();
    let dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("0" + date.getDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + "-" +
        ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
    return dateString;
}

export default convertPdf;
