package leafar.app;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
//si pongo RestController estaria incluido el response body y entonces no funciona los templatesss

	@RequestMapping("/")
    public String hello(Model modelo){
		modelo.addAttribute("mensaje","hola desde thymeleaf");
        return "home";
    }
    
    @RequestMapping("/hola")
    public String hola(@RequestParam(value="nombre", required=false, defaultValue="Mundo") String nombre, Model model){
        model.addAttribute("nombre", nombre);
        return "home";
    }
    
//    @GetMapping("/menuStatus")    
//    public String getStatus(@RequestParam String status, Model model) {
//        model.addAttribute("status", status);
//        return "menuDesplegable";
//    }
    
    @GetMapping("/menuStatus")    
    public String getStatus(@RequestParam String status, Model model) {
        model.addAttribute("status", status);
//        return "menuDesplegable::menuDesplegableFragment";
        return "home";

    }



}
