package leafar.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import leafar.app.entity.Producto;
import leafar.app.services.ProductoService;

@Controller
public class HomeController {
//si pongo RestController estaria incluido el response body y entonces no funciona los templates

	@Autowired
	private ProductoService productoService;
	
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

    
    @GetMapping("/menu")    
    public String getStatus(@RequestParam String status, Model model) {
        model.addAttribute("status", status);
        String view = "home";
        if (StringUtils.pathEquals(status, "women")){
        view = "menuWomen";		
        }
        if ("men".equals(status)){
        view = "menuMen";		
        }
        
//        return "menuDesplegable::menuDesplegableFragment";
        return view;

    }
    
    @PostMapping("/save")
    public ResponseEntity<?> createProduct(@RequestBody Producto producto){//requestbody es que en el cuerpo de la llamada metere un producto
    	return ResponseEntity.status(HttpStatus.CREATED).body(productoService.save(producto));
    }
    
    @GetMapping("/getAll")
    public ResponseEntity<?> getAll(){
    	List<Producto> productos = productoService.findAll();
    	return ResponseEntity.ok(productos);
    }



}
