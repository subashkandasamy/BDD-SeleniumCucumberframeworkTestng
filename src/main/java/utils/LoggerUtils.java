package utils;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class LoggerUtils {

	
private static boolean root=false;
	
	@SuppressWarnings("rawtypes")
	public static Logger getLogger(Class cls){
		if(root){
			return Logger.getLogger(cls);
		}
		PropertyConfigurator.configure("log4j.properties");
		root = true;
		return Logger.getLogger(cls);
	}
	
	public static void main(String[] args) {
		Logger log = LoggerUtils.getLogger(LoggerUtils.class);
		log.info("Snappet Dashbord test Logger");
				
	}
}
