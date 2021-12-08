using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using UnityEngine;

/*  
 *  README
 *  1. Setup a "throw-away" Google Account or you can use an SMTP email 
 *  2. Allow less secure Google access
 *  
 */
/*
 * To test sending emails through SMTP, you can use your Gmail account or sign up for a new one. 
 * To use Google's SMTP servers, you will need to enable Less secure app access on your profile's Security page:

Less secure app blocked
Google blocked the app that you were trying to use because it doesn't meet our security standards.
Some apps and devices use less secure sign-in technology, which makes your account more vulnerable.
You can turn off access for these apps, which we recommend, or turn on access if you want to use them
despite the risks. Google will automatically turn this setting OFF if it's not being used.
*/
//@TODO check for internet access
//@TODO check for email send success
public class SendEmail : MonoBehaviour
{
    [SerializeField]
    private string fromEmail = "";

    [SerializeField]
    private string toEmail = "";

    [SerializeField]
    private string subject = "Test Email unity";

    [SerializeField]
    private string body = "Here's some text";

    [SerializeField]
    private string password = "";

    // Start is called before the first frame update
    void Start()
    {
        EmailSending();
    }

    // Update is called once per frame
    void EmailSending()
    {

        MailMessage mail = new MailMessage();
        mail.From = new MailAddress(fromEmail);
        mail.To.Add(toEmail);
        mail.Subject = subject;
        mail.Body = body;
        // you can use others too.
        SmtpClient smtpServer = new SmtpClient("smtp.gmail.com", 587);
        //smtpServer.Port = 587;
        smtpServer.Credentials = new System.Net.NetworkCredential(fromEmail, password) as ICredentialsByHost;
        smtpServer.EnableSsl = true;
        ServicePointManager.ServerCertificateValidationCallback =
        delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        { return true; };
        smtpServer.Send(mail);

        //Cleanup
        mail.Dispose();
        Debug.Log("bye!");

    }

}

/*
 * Reading Reference
 * SMTP Class: https://docs.microsoft.com/en-us/dotnet/api/system.net.mail.smtpclient?view=net-5.0
 * https://blog.elmah.io/how-to-send-emails-from-csharp-net-the-definitive-tutorial/
 */