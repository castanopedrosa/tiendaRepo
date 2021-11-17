package leafar.app.services;

import java.util.List;

import leafar.app.entity.Producto;


public interface ProductoService {
	
	List<Producto> findAll();
	
	Producto save(Producto p);

}
