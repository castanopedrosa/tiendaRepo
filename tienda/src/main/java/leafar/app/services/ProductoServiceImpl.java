package leafar.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import leafar.app.entity.Producto;
import leafar.app.repository.ProductoRepository;

@Service
public class ProductoServiceImpl implements ProductoService {

	@Autowired
	ProductoRepository productoRep;
	
	@Override
	@Transactional(readOnly = true)
	public List<Producto> findAll() {
		return productoRep.findAll();
	}

	@Override
	public Producto save(Producto p) {
		return productoRep.save(p);
	}

}
