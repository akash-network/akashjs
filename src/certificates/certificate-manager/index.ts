import { CertificateManager } from "./CertificateManager";

/**
 * An instance of the CertificateManager class.
 * 
 * @example
 * // Import the certificateManager instance
 * import { certificateManager } from './certificate-manager';
 * 
 * // Use the certificateManager instance
 * certificateManager.issueCertificate('user123');
 */
const certificateManager = new CertificateManager();

export { 
    /**
     * CertificateManager class for managing certificates.
     * 
     * @example
     * // Import the CertificateManager class
     * import { CertificateManager } from './certificate-manager';
     * 
     * // Create a new instance of CertificateManager
     * const myCertificateManager = new CertificateManager();
     */
    CertificateManager, 

    certificateManager 
};
